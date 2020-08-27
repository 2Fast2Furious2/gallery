## CRUD OPERATIONS

###### GET: `/properties/:id`
###### Success: Return status 200
###### Get data from db, need id.
```
{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: Boolean,
  location: String,
  images: {
    bedrooms: Array,
    bathrooms: Array,
    house: { imageURL: String, description: String },
    backyard: { imageURL: String, description: String },
    kitchen: { imageURL: String, description: String }
  }
}
```

###### POST: `/properties/:id`
###### Success: Return status 201
###### Expects Json input in the following format:
```
{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: Boolean,
  location: String,
  images: {
    bedrooms: Array,
    bathrooms: Array,
    house: { imageURL: String, description: String },
    backyard: { imageURL: String, description: String },
    kitchen: { imageURL: String, description: String }
  }
}
```

###### PATCH: `/properties/:id`
###### Success: Return status 204
###### Edit information from db. Expects following key/value pair:
```
{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: Boolean,
  location: String,
  images: {
    bedrooms: Array,
    bathrooms: Array,
    house: { imageURL: String, description: String },
    backyard: { imageURL: String, description: String },
    kitchen: { imageURL: String, description: String }
  }
}
```

###### DELETE: `/properties/:id`
###### Success: Return status 204
###### Removes all data with the same id
