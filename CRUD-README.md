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
  location: String
}

```

###### POST: `/properties/`
###### Success: Return status 201
###### Expects Json input in the following format:
```
{
  _id: Number,
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: Boolean,
  location: String
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
  location: String
}
```

###### DELETE: `/properties/:id`
###### Success: Return status 204
###### Removes all data with the same id



###### GET: `/properties/:id/images`
###### Success: Return status 200
###### Get certain image, need id.
```
{
  id SERIAL PRIMARY KEY,
  propertiesId INTEGER,
  imageUrl VARCHAR(255)
};
```

###### POST: `/properties/:id/images`
###### Success: Return status 201
###### Expects Json input in the following format:
```
{
  id SERIAL PRIMARY KEY,
  propertiesId INTEGER,
  imageUrl VARCHAR(255)
};
```
