const { Client } = require("pg");

const db = new Client({
  user: 'mainfolder',
  host: "localhost",
  database: "gallery",
  password: null
});

db.connect();

module.exports = db;
