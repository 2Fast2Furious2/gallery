DROP KEYSPACE IF EXISTS gallery;

CREATE KEYSPACE gallery
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 3
  };

USE gallery;

-- example 2
CREATE TABLE properties (
  properties_id INT,
  description TEXT,
  star_rating INT,
  superhost BOOLEAN,
  location TEXT,
  PRIMARY KEY (propertiesId)
);

CREATE TABLE imges (
  image_id INT,
  properties_id INT,
  image_url TEXT,
  PRIMARY KEY (imageId)
);

