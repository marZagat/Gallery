// this is the script for single node mongoDB data seeding ~ approx time: 35 minutes

const data = require('./data_generation.js');
const helper = require('./helpers.js');
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const cmd = require('node-cmd');

const DOCKER = `database`;
const LOCAL = `localhost`;

const url = `mongodb://${LOCAL}:27017`;

const mongoDataBase = async () => {
  await cmd.run(`mongod`, () => {
    console.log(`mongod has been executed`);
  });
  
  await cmd.run(`mongo`, () => {
    console.log(`mongo has been executed, seeding will now begin`);
  });
  console.log(`mongoDataBase has concluded`);
}

mongoDataBase();

MongoClient.connect(url, async (err, client) => {
  console.log('this is the seed page url: ', url); // debugging statement 
  if (err) throw err;
  db = client.db('photoz');

  //create a promise for the generation
  let items = (id) => {
    return new Promise((resolve, reject) => {
      let data = helper.generate(id);

        if (err) throw err;
        db = client.db('photoz');
          db.collection("photoz").insertMany(data, function(err, res) {
            data = [];
            if (err) throw err;
            console.log("1 iteration inserted");
            resolve();
          });
      });
  }
  let id_gen = 0;
  let create = async() => {
    let run = async () => {
      for (let i = 0; i < 1000; i++) {
        await items(id_gen);
        console.log(`done with ${i}`);
        id_gen = id_gen + 10000;
      }
    }
    await run();
  }
  
  let createIndex = async () => {
    await db.collection('photoz').createIndex({'place_id': 1});
    console.log(`indices are created...`);
  }
  await create()
  await createIndex();
  await client.close();


  // console.log('done seeding');
  cmd.get('CTRL+C', () => {
    console.log(`terminal has closed it's connection and the cmd.get func has been invoked`);
  }); 
  cmd.get('^C', () => {
    console.log('terminal has closed it\'s conncetion and cmd.get func is invoked');
  })
});