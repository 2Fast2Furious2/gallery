const fs = require("fs");

const seedImages = (writer, min, max, cb) => {

  let writeFile = () => {

    let word1 = ["alluring", "appealing", "charming", "cute", "dazzling", "delicate", "delightful", "elegant", "exquisite", "fascinating", "fine", "good-looking", "gorgeous", "graceful", "grand", "handsome", "lovely", "magnificent", "marvelous"];

    let word2 = ["pleasing", "pretty", "splendid", "stunning", "superb", "wonderful", "admirable", "angelic", "beauteous", "bewitching", "classy", "comely", "divine", "enticing", "excellent", "fair", "foxy", "ideal", "nice", "pulchritudinous", "radiant", "ravishing", "refined", "resplendent", "shapely", "sightly", "statuesque", "sublime", "symmetrical", "taking", "well-formed"];

    let word3 = ["backyard", "paintings", "atmosphere", "facade", "interior", "exterior", "living-room", "bathroom", "front-yard"];

    let ok = true;

    do {
      let description = `${word1[min % word1.length]} and ${word2[min % word2.length]} ${word3[min % word3.length]}`
      let imageUrl = `https://7528house.s3-us-west-1.amazonaws.com/image${min % 99}.jpg`;
      let propertiesId = min % 10000000
      let checker = (id) => {
        if (id % 10000000 === 0) {
          return 10000000;
        } else {
          return id % 10000000;
        }
      }
      let data = `${min},${checker(min)},${imageUrl},${description}\n`;

      min % max === 0 ? writer.write(data, "utf-8", cb) : ok = writer.write(data, "utf-8");
      min++;
    }
    while(min <= max && ok);
    if (min <= max) {
      writer.once("drain", writeFile);
    }
  }
  writeFile();
}

let writeStream = fs.createWriteStream("../csvsIgnore/images.csv");
let headers = "id,properties_id,image_url,image_description\n";
writeStream.write(headers);

// seedImages(writeStream, 1, 1000) // 1000
// seedImages(writeStream, 1, 1000000) // 1mil
// seedImages(writeStream, 1, 10000000, () => {console.log("Finished Generating Data")}) // 10mil // 0.15.72 // 1.07gb
// seedImages(writeStream, 1, 100000000, () => {console.log("Finished Generating Data")}) // 100mil // 2.23.46 // 10.81gb
