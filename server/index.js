const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
const dummydata = require("./dummydata.json");
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../db/index");
let dbQueries = require("./models/properties");

//send static files inside the public folder
app.use("/rooms/:id", express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/properties/:id", (req, res) => {
  let id = req.params.id;
  dbQueries.getProperties(id, (err, data) => {
    if (err) {
      res.status(400).send("error");
    } else {
      console.log("success");
      res.status(200).send(data);
    }
  });
});