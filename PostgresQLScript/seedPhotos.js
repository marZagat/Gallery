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

const insertPhotos = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generatePhotos(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'url1', 'url2','url3','url4','url5','url6','url7','url8','url9','url10', 'photo_id'],
    { table: 'photos' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`photos stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createPhotos = () => {
  dbt.none(`CREATE TABLE photos(id INTEGER PRIMARY KEY, url1 TEXT, url2 TEXT, url3 TEXT, url4 TEXT, url5 TEXT,
    url6 TEXT, url7 TEXT, url8 TEXT, url9 TEXT, url10 TEXT, photo_id INTEGER REFERENCES restaurant);`)
    .then((data) => {
      console.log('photos table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertPhotos(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const addtoDB = async () => {
  await createPhotos();
}

addtoDB();