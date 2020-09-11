const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
// const bodyParser = require("body-parser");
const db = require("../db/db2/index.js");
let dbQueries = require("../server/models/properties.js");

//send static files inside the public folder
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/rooms/:id", express.static(path.join(__dirname, "../public")));

app.get("/properties/:id", (req, res) => {
  // let id = String(req.params.id);
  db.getProperty(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send("error");
    } else {
      res.status(200).send(data[0]);
    }
  })
})

app.get("/properties/:id/images", (req, res) => {
  // let id = String(req.params.id);
  db.getProperty(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send("error");
    } else {
      res.status(200).send(data[0].images);
    }
  })
})

// app.get("/properties/:id", (req, res) => {
//   let id = String(req.params.id);
//   dbQueries.getProperties(id, (err, data) => {
//     if (err) {
//       res.status(400).send("error");
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });


app.listen(PORT, () => {
  console.log(`>>--------> ${PORT} <-------<<`);
});
