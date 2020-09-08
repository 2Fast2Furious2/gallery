const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/gallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create connection and export to use in other files
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(">>------> MongoDB <------<<");
});

module.exports = db;
