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

const insertAvatars = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateAvatars(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'url1', 'url2', 'url3', 'url4', 'url5'],
    { table: 'avatars' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`avatars stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createAvatars = () => {
  dbt.none(`CREATE TABLE avatars(id INTEGER PRIMARY KEY, url1 TEXT, url2 TEXT, 
    url3 TEXT, url4 TEXT, url5 TEXT, REFERENCE users);`)
    .then((data) => {
      console.log('avatars table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertAvatars(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const addtoDB = async () => {
  await createAvatars();
}

addtoDB();