const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
const dummydata = require("./dummydata.json");
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../db/index");
let dbQueries = require("./models/properties");
let { Property } = require(".././db/models/Property.js");

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
////////////////////////////////////////////
//CRAP I ADDED TO MAKE DIFFERENT REQUESTS///
////////////////////////////////////////////

//POST
app.post("/properties/:id", (req, res) => {
  console.log(req.params);

  let newPropertyObj = new Property({
    _id: req.params.id,
    description: req.params.description,
    starRating: req.params.starRating,
    reviewTotal: req.params.reviewTotal,
    superhost: req.params.superhost,
    location: req.params.location,
    images: req.params.images,
  });

  newPropertyObj.save((err, data) => {
    if (err) {
      res.status(400).send("error");
    } else {
      res.status(201).send(data);
    }
  });
});
//DELETE (WORKS)
app.delete("/properties/:id", (req, res) => {
  Property.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(400).send("Error");
    } else {
      res.status(200).send("Deleted");
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
