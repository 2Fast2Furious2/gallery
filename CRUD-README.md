## CRUD OPERATIONS

#### GET

#### GET: `/properties/:id`


#### Get data from db, need id.

```
{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: boolean,
  location: String,
  images: {
    bedrooms: Array,
    bathrooms: Array,
    house: { imageURL: String, description: String},
    backyard: { imageURL: String, description: String},
    kitchen: { imageURL: String, description: String}
  }
}
```

Add properties
POST /properties/:id
Success Status Code: 201

Request Body: Expects JSON with the following keys.

{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: boolean,
  location: String,
  images: {
    bedrooms: Array,
    bathrooms: Array,
    house: { imageURL: String, description: String},
    backyard: { imageURL: String, description: String},
    kitchen: { imageURL: String, description: String}
  }
}

Update properties info
PATCH /properties/:id
Path Parameters:

id properties id
Success Status Code: 204

Request Body: Expects JSON with any of the following keys (include only keys to be updated)

{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: boolean,
  location: String,
  images: {
    bedrooms: Array,
    bathrooms: Array,
    house: { imageURL: String, description: String},
    backyard: { imageURL: String, description: String},
    kitchen: { imageURL: String, description: String}
  }
}

Delete properties
DELETE /properties/:id
Path Parameters:

id properties id
Success Status Code: 204
