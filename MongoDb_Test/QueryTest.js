const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client, db) => {
  if (err) throw err;
  db = client.db('photos');

  let querying = () => {
    let id = {'place_id': 848344}
    db.collection('photos').find(id).toArray((err, result) => {
      if (err) throw err;
      // console.log(result);
      client.close();
    });
  };

  let querying1x = (input) => {
    let id = {'place_id': input}
    db.collection('photos').find(id).toArray((err, result) => {
      if (err) throw err;
      // console.log(result);
      client.close();
    });
  };

  //Test single query time
  let testQueryTimes = async () => {
    let start = new Date().getTime();
    let end;
    let time;
    for (let i = 0; i < 1; i++) {
      await querying();
      end = new Date().getTime();
      time = end - start;
    }
    console.log(`Single query time in milliseconds: ${time}m/s`);
  };

  //Test 100 queries
  let test100QueryTimes = async () => {
    let start = new Date().getTime();
    let end;
    let time;
    let id = 20
    for (let i = 0; i < 100; i++) {
      await querying1x(id);
      if (i === 99) { 
        end = new Date().getTime();
        time = end - start;
      }
      id ++;
    }
    console.log(`One hundred queries time in milliseconds: ${time}m/s`);
  };

  //Test 1000 queries
  let test1000QueryTimes = async () => {
    let start = new Date().getTime();
    let end;
    let time;
    let id = 20
    for (let i = 0; i < 1000; i++) {
      await querying1x(id);
      if (i === 999) { 
        end = new Date().getTime();
        time = end - start;
      }
      id ++;
    }
    console.log(`One thousand queries time in milliseconds: ${time}m/s`);
  };

  //Test 100000 queries
  let test100000QueryTimes = async () => {
    let start = new Date().getTime();
    let end;
    let time;
    let id = 20
    for (let i = 0; i < 100000; i++) {
      await querying1x(id);
      if (i === 99999) { 
        end = new Date().getTime();
        time = end - start;
      }
      id ++;
    }
    console.log(`One hundred thousand queries time in milliseconds: ${time}m/s`);
  };
  
  //Test 1000000 queries
  let test1000000QueryTimes = async () => {
    let start = new Date().getTime();
    let end;
    let time;
    let id = 20
    for (let i = 0; i < 1000000; i++) {
      await querying1x(id);
      if (i === 999999) { 
        end = new Date().getTime();
        time = end - start;
      }
      id ++;
    }
    console.log(`One million queries time in milliseconds: ${time}m/s`);
  };

  let execute = async () => {
    await testQueryTimes();
    await test100QueryTimes();
    await test1000QueryTimes();
    await test100000QueryTimes();
    // await test1000000QueryTimes();
    console.log('finished executing all query test functions');
  }

  execute();
});