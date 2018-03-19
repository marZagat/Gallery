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

const insertUsers = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateUsers(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'name'],
    { table: 'users' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`users stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createUsers = () => {
  dbt.none(`CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT, REFERENCE restaurant);`)
    .then((data) => {
      console.log('users table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertUsers(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const addtoDB = async () => {
  await createUsers();
}

addtoDB();