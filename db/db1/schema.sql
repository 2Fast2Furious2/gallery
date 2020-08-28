-- POSTGRES
DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

\c gallery

-- example1
CREATE TABLE properties
(
  id SERIAL PRIMARY KEY,
  description VARCHAR(100),
  starRating INTEGER,
  superhost BOOLEAN,
  location VARCHAR(100)
);

CREATE TABLE images
(
  id SERIAL PRIMARY KEY,
  propertiesId INTEGER,
  imageUrl VARCHAR(255)
);

-- FOREIGN KEY (propertiesId) REFERENCES properties(id)
-- Have 2 tables, images and properties,
-- Generate 10_000_000 properties
--
-- Each property will have around 10 pics each
-- Generate about 100_000_000 pics ~10 for each property
-- Each pic will have id so we can handle different api reqs (change specific image, delete, get,)
-- images propertiesId will reference one of theentry





