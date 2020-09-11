const mongo = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/gallery";

// mongoose.connect("mongodb://localhost/gallery", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// //create connection and export to use in other files
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log(">>------> MongoDB <------<<");
// });

module.exports.getProperty = (propid, callback) => {
  // id = parseInt(id)
  mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
    if (err) {
      callback(err);
    }
    database
      .db("gallery")
      .collection("properties")
      .find({id: propid})
      .limit(1)
      .toArray((err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
          database.close();
        }
      })
  });
}
