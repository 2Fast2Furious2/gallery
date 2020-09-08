let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// let images = new Schema({
//   id: String,
//   image_url: String,
//   image_description: String,
// });

let property = new Schema({
  id: String,
  description: String,
  rating: Number,
  reviews: Number,
  superhost: Boolean,
  location: String,
  images: Array,
});

// id, description, rating, reviewsCount, superhost, location, images;
var Property = mongoose.model("property", property);
// var Image = mongoose.model("image", images);

//comment
module.exports = {Property}


