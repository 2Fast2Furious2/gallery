let property = require("../../db/models/sdcProperty");

//GET
const getProperties = (id, callback) => {
  property.Property.find({ id: `${id}` }, (err, document) => { //changed args id   from _id
    if (err) {
      console.log("err", err);
    } else {
      callback(null, document);
    }
  });
};

////////////////////////////////////////////
//CRAP I ADDED TO MAKE DIFFERENT REQUESTS///
////////////////////////////////////////////
//PUT
const updateProperties = (id, field, callback) => {};

//CREATE
const addProperties = (property, callback) => {};

//DELETE (WORKS)
const deleteProperty = (id, callback) => {};

module.exports = {
  getProperties,
  updateProperties,
  addProperties,
  deleteProperty,
};

// Property.deleteOne({ _id: id }, (err, document) => {
//   if (err) {
//     console.log(err, "error");
//   } else {
//     callback(null, document);
//   }
// });

//  let newPropertyObj = new Property({
//    _id: property.id,
//    description: property.description,
//    starRating: property.starRating,
//    reviewTotal: property.reviewTotal,
//    superhost: property.superhost,
//    location: property.location,
//    images: property.images,
//  });
//  //create new property
//  let newProperty = new Property(newPropertyObj);

//  newProperty.save((err, data) => {
//    if (err) {
//      console.log("error", err);
//    } else {
//      callback(data);
//    }
//  });

// Property.updateOne({ _id: id }, { set: { field } }, (err, document) => {
//   if (err) {
//     console.log("err", err);
//   } else {
//     callback(null, document);
//   }
// });
