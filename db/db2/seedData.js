const fs = require("fs");

const seedData = (writer, min, max, cb) => {
  let writeFile = () => {

    let word1 = ["alluring", "appealing", "charming", "cute", "dazzling", "delicate", "delightful", "elegant", "exquisite", "fascinating", "fine", "good-looking", "gorgeous", "graceful", "grand", "handsome", "lovely", "magnificent", "marvelous"];
    let word2 = ["pleasing", "pretty", "splendid", "stunning", "superb", "wonderful", "admirable", "angelic", "beauteous", "bewitching", "classy", "comely", "divine", "enticing", "excellent", "fair", "foxy", "ideal", "nice", "pulchritudinous", "radiant", "ravishing", "refined", "resplendent", "shapely", "sightly", "statuesque", "sublime", "symmetrical", "taking", "well-formed"];
    let word3 = ["backyard", "paintings", "atmosphere", "facade", "interior", "exterior", "living-room", "bathroom", "front-yard"];
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

      let shuffle = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      let id = min;
      let description = `${firstWord[min % firstWord.length]} ${cities[min % cities.length]} Home`;
      let rating = stars[min % 4];
      let reviews = numberOfReviews[min % numberOfReviews.length];
      let superhost = min % 5 === 0 ? true : false;
      let location = cities[min % cities.length];

      const properties = {
        id: `${id}`,
        description: `${description}`,
        rating: `${rating}`,
        reviews: `${reviews}`,
        superhost: `${superhost}`,
        location: `${location}`,
        images: [],
      };
        for (let i = 1; i <= 10; i++) {

          let imageUrl = `https://7528house.s3-us-west-1.amazonaws.com/image${shuffle(1, 101)}.jpg`;
          let imageDescription = `${word1[shuffle(1, 18)]} and ${word2[shuffle(1, 30)]} ${word3[shuffle(1, 8)]}`

          let image = {
            id: `${i}`,
            image_url: `${imageUrl}`,
            image_description: `${imageDescription}`
          }

          properties.images.push(image);
        }

        const data = JSON.stringify(properties) + '\n';
        if (min % max === 0) {
          writer.write(data, "utf-8", cb);
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

let writeStream = fs.createWriteStream("../csvsIgnore/mongoData3.json");

seedData(writeStream, 1, 10000000, ()=> {
  console.log("finished seeding")
});

// /Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/mongoData.csv (FILEPATH)
// mongoimport --type csv -d gallery -c properties --headerline --drop /Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/mongoData.csv (IMPORT CSV)
// mongoimport --db gallery --collection properties --type json --file /Users/mainfolder/Desktop/SystemDesignCapstone/gallery/db/csvsIgnore/mongoData.json (IMPORT JSON)