const data = require('./data_generation.js');
const helper = require('./helpers.js');
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

// mongoose.connect('mongodb://localhost/photos');

MongoClient.connect(url, function(err, client, db) {
  if (err) throw err;
  db = client.db('photos');

//create a promise for the generation
let items = (id) => {
  return new Promise((resolve, reject) => {
    let data = helper.generate2(id);
    db.collection("photos").insertMany(data, function(err, res) {
      data = [];
      if (err) throw err;
      console.log("1 iteration inserted");
      resolve();
    });
  });
}

let create = async () => {
  let id_gen = 3340001;
  for (let i = 0; i < 334; i++) {
    await items(id_gen);
    console.log(`done with ${i}`);
  }
}

create()

console.log('done seeding');
// db.close();
});