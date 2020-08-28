const fs = require("fs");

const seedProperties = (max) => {
  let imageLink = "https://7528house.s3-us-west-1.amazonaws.com/image1.jpg";
  let firstWord = [
    "Big",
    "Beautiful",
    "Comfortable",
    "Cosy",
    "Huge",
    "Small",
    "Homely",
  ];
  let cities = [
    "Los Angeles",
    "San Diego",
    "San Jose",
    "San Francisco",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Oakland",
    "Bakersfield",
    "Anaheim",
    "Santa Ana",
    "Riverside",
    "Stockton",
    "Irvine",
  ];

  let stars = [3, 4, 5];

  let str = "";
  for (let i = 1; i <= max; i++) {
    let propId = `${i}`;
    let propdescription = `${firstWord[i % firstWord.length]} ${cities[i % cities.length]} Home`;
    let propstarRating = stars[i % 3];
    let propsuperhost = i % 2 ? true : false;
    let proplocation = cities[i % cities.length];

    str += `{ id: ${propId}, description: ${propdescription}, starRating: ${propstarRating}, superhost: ${propsuperhost}, location: ${proplocation} }\n`;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile("postgresData.txt", str, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

seedProperties(10000000)
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("err");
  });
