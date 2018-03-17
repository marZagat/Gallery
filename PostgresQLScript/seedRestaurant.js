const pg = require('pg');
const pgp = require('pg-promise')();
const faker = require('faker');
const generateData = require('./helpers.js');

const db = pgp({
  database: 'postgres',
  port: 5432
});

const dbt = pgp({
  database: 'restaurants',
  port: 5432
});

const dataSize = 10000000;

const insertRestaurant = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateRestaurant(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'name'],
    { table: 'restaurant' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`restaurants stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createRestaurant = () => {
  dbt.none(`CREATE TABLE restaurant(id INTEGER PRIMARY KEY, name TEXT);`)
    .then((data) => {
      console.log('restaurant table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertRestaurant(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const createDB = () => {
  db.none('CREATE DATABASE restaurants;')
    .then((data) => {
      console.log('successfully created');
    })
    .then(() => {
      createRestaurant();
    })
    .catch((error) => {
      console.log(error);
    });
};

createDB();