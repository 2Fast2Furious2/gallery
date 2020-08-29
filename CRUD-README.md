## CRUD OPERATIONS

###### GET: `/properties/:id`
###### Success: Return status 200
###### Get data from db, need id.
```
{
  "_id": "Number",
  "description": "String",
  "starRating": "Number",
  "reviewTotal": "Number",
  "superhost": "Boolean",
  "location": "String",
  "images": [{
    "imageID": "Number",
    "imageURL": "String",
  }]
}

```

###### POST: `/properties`
###### Success: Return status 201
###### Expects Json input in the following format:
```
{
  "_id": "Number",
  "description": "String",
  "starRating": "Number",
  "reviewTotal": "Number",
  "superhost": "Boolean",
  "location": "String",
  "images": [{
    "imageId": "Number",
    "imageUrl": "String",
  }]
}
```

###### PATCH: `/properties/:id`
###### Success: Return status 204
###### Edit information from db. Put only keys you want replaced. Expects following key/value pair:
```
{
  "_id": "Number",
  "description": "String",
  "starRating": "Number",
  "reviewTotal": "Number",
  "superhost": "Boolean",
  "location": "String",
  "images": [{
    "imageId": "Number",
    "imageUrl": "String",
  }]
}
```

###### DELETE: `/properties/:id/images/:imageId`
###### Success: Return status 204
###### Delete a specific image in a property


###### POST: `/properties/:id/photos`
###### Success: Return status 201
###### Add Photo to a property

```
{
  "imageId": "String",
  "imageUrl": "String"
}
```

###### PATCH: `/properties/:id/images/:imageId`
###### Success: Return status 204
###### Updates an image in a property.
```
{
  "imageId": "String",
  "imageUrl": "String"
}
```
