const fs = require("fs");

const seedProperty = (writer, min, max, cb) => {
  let writeFile = () => {
    let firstWord = [
        "Elegant",
        "Spacious",
        "Trendy",
        "Simple",
        "Sophisticated",
        "Antique",
        "Colorful",
        "Dazzling",
        "Big",
        "Beautiful",
        "Comfortable",
        "Cozy",
        "Huge",
        "Small",
        "Homely",
        "Abundant",
        "Luxurious"
    ];
    let cities = [
      "Miami",
      "New York",
      "Napa",
      "Las Vegas",
      "Reno",
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
    let stars = [2, 3, 4, 5];
    let numberOfReviews = [12, 292, 91, 66, 615, 32, 55, 88, 22, 418, 336, 77, 84, 185, 516];
    let ok = true;
    do {
      let id = min;
      let description = `${firstWord[min % firstWord.length]} ${cities[min % cities.length]} Home`;
      let rating = stars[min % 4];
      let reviews = numberOfReviews[min % numberOfReviews.length];
      let superhost = min % 5 === 0 ? true : false;
      let location = cities[min % cities.length];
      let data = `${id},${description},${rating},${reviews},${superhost},${location}\n`;

      if (min % max === 0) {
        writer.write(data, "utf-8"), cb;
      } else {
        ok = writer.write(data, "utf-8");
      }
      min++;
    }
    while (min <= max && ok);
    if (min <= max) {
      writer.once("drain", writeFile);
    }
  }
  writeFile();
};

let writeStream = fs.createWriteStream("../csvsIgnore/properties.csv");
let headers = "id,description,rating,reviewsCount,superhost,location\n";
writeStream.write(headers);

// seedProperty(writeStream, 1, 100000, () => { console.log("Finished Generating Data"); }); // 100k
// seedProperty(writeStream, 1, 1000000, () => { console.log("Finished Generating Data"); }); // 1mil // 0.01.96
// seedProperty(writeStream, 1, 100000000, () => { console.log("Finished Generating Data"); }); //10mil // 0.13.86// 544mb
// seedProperty(writeStream, 1, 100000000, () => { console.log("Finished Generating Data"); }); //100mil // 2.09.98// 5.65gb



