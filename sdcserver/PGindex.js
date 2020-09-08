const express = require("express");
const app = express();
const port = 3000;
const controller = require("../db/db1/controller.js");
const parser = require("body-parser");
const path = require("path");

app.use("/rooms/:roomId", express.static(path.join(__dirname, "../public")));
app.use(parser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening At Port ${port}`));

app.get("/properties/:id", (req, res) => {
  let propertiesId = req.params.id
  controller.getProperties(propertiesId, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/properties/:id/images", (req, res) => {
  let propertiesId = req.params.id
  controller.getImages(propertiesId, (err,data) => { //id
    if (err) {
      res.status(400).send("Error getting images");
    } else {
      res.status(200).send(data);
    }
  })
})
