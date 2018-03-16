// this is the script for single node mongoDB data seeding ~ approx time: 35 minutes

const data = require('./data_generation.js');
const helper = require('./helpers.js');
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, client, db) {
  if (err) throw err;
  db = client.db('photos');

//create a promise for the generation
let items = (id) => {
  return new Promise((resolve, reject) => {
    let data = helper.generate(id);

      if (err) throw err;
      db = client.db('photos');
        db.collection("photos").insertMany(data, function(err, res) {
          data = [];
          if (err) throw err;
          console.log("1 iteration inserted");
          resolve();
          // db.close();
        });
    });
}

let create = async() => {
  let id_gen = 0;
  for (let i = 0; i < 1000; i++) {
    await items(id_gen);
    console.log(`done with ${i}`);
  }
}

create()

console.log('done seeding');
//need to add a closing script 
});