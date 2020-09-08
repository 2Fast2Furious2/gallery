-- POSTGRES
DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

\c gallery

-- example1
CREATE TABLE properties
(
  id SERIAL PRIMARY KEY,
  description VARCHAR(100),
  rating INTEGER,
  reviews_count INTEGER,
  superhost BOOLEAN,
  location VARCHAR(100)
);

CREATE TABLE images
(
  id SERIAL PRIMARY KEY,
  properties_id INTEGER,
  image_url VARCHAR(255),
  image_description VARCHAR(255)
);

-- COPY properties(id, description, rating, reviews_count, superhost, location)
-- FROM '/Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/properties.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY images(id, properties_id, image_url, image_description)
-- FROM '/Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/images.csv'
-- DELIMITER ','
-- CSV HEADER;

-- /Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/properties.csv (propertiesCSV)
-- /Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/properties.csv (imagesCSV)


