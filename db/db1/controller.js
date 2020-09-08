const db = require("./index.js");

const getProperties = (id, callback) => {
  let searchQuery = `SELECT * FROM properties where id=${id}`;
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getImages = (id, callback) => {
  let searchQuery = `SELECT * FROM images where properties_id=${id}`;
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

module.exports = { getProperties, getImages };
