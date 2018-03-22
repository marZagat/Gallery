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

let querying1x = (id) => {
  dbt.any(`SELECT * FROM restaurant WHERE id = ${id};`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM photos WHERE id = ${id};`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM users WHERE id = ${id};`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM avatars WHERE id = ${id};`).then((data) => {
    console.log(data);
  });
  dbt.any(`SELECT * FROM dimensions WHERE id = ${id};`).then((data) => {
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

//Testing 100 queries
let test100QueryTimes = async() => {
  let start = new Date().getTime();
  let end;
  let time;
  let id = 10;
  for (let i = 0; i < 100; i++) {
    await querying1x(id.toString());
    if (i === 99) {
      end = new Date().getTime();
      time = end - start;
    }
    id ++;
  }
  console.log(`One hundred queries time in milliseconds: ${time}m/s`);
}

//Testing 1000 queries
let test1000QueryTimes = async() => {
  let start = new Date().getTime();
  let end;
  let time;
  let id = 10;
  for (let i = 0; i < 1000; i++) {
    await querying1x(id.toString());
    if (i === 999) {
      end = new Date().getTime();
      time = end - start;
    }
    id ++;
  }
  console.log(`One thousand queries time in milliseconds: ${time}m/s`);
}

//Testing 100000 queries
let test100000QueryTimes = async() => {
  let start = new Date().getTime();
  let end;
  let time;
  let id = 10;
  for (let i = 0; i < 100000; i++) {
    await querying1x(id.toString());
    if (i === 99999) {
      end = new Date().getTime();
      time = end - start;
    }
    id ++;
  }
  console.log(`One hundred thousand queries time in milliseconds: ${time}m/s`);
}

//Testing 1000000 queries
let test1000000QueryTimes = async() => {
  let start = new Date().getTime();
  let end;
  let time;
  let id = 10;
  for (let i = 0; i < 1000000; i++) {
    await querying1x(id.toString());
    if (i === 999999) {
      end = new Date().getTime();
      time = end - start;
    }
    id ++;
  }
  console.log(`One million queries time in milliseconds: ${time}m/s`);
}

let execute = async () => {
  await testQueryTimes();
  await test100QueryTimes();
  await test1000QueryTimes();
  await test100000QueryTimes();
  await test1000000QueryTimes();
  console.log('finished executing all query test functions');
}

execute();
