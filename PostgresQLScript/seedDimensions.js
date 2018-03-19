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

const insertDimensions = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateDimensions(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'width', 'height', 'dimension_id'],
    { table: 'dimensions' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`dimensions stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createDimensions = () => {
  dbt.none(`CREATE TABLE dimensions(id INTEGER PRIMARY KEY, height INTEGER, width INTEGER, dimension_id INTEGER REFERENCES photos);`)
    .then((data) => {
      console.log('dimensions table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertDimensions(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const addtoDB = async () => {
  await createDimensions();
}

addtoDB();

