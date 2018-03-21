const pgp = require('pg-promise')();
const pg = require('pg');

const db = pgp({
  database: 'postgres',
  port: 5432
});

const dbt = pgp({
  database: 'restaurants',
  port: 5432
});

//query function
let querying = (id) => {
  dbt.any(`SELECT * FROM restaurant WHERE id = 5848498;`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM photos WHERE id = 5848498;`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM users WHERE id = 5848498;`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM avatars WHERE id = 5848498;`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM dimensions WHERE id = 5848498;`).then((data) => {
    console.log(data);
  });
}

//async function which will log a start time and and end time when the async call is completed
let testQueryTimes = async() => {
  let start = new Date().getTime();
  let end;
  let time;
  for (let i = 0; i < 1; i++) {
    await querying();
    end = new Date().getTime();
    time = end - start;
  }
  console.log(`Time in milliseconds: ${time}m/s`);
}

testQueryTimes();
