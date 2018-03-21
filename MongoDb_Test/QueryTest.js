const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client, db) => {
  if (err) throw err;
  db = client.db('photos');

  let querying = () => {
    let id = {'place_id': 9023838}
    db.collection('photos').find(id).toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
  };

  let testQueryTimes = async () => {
    let start = new Date().getTime();
    let end;
    let time;
    for (let i = 0; i < 1; i++) {
      await querying();
      end = new Date().getTime();
      time = end - start;
    }
    console.log(`Time in milliseconds: ${time}m/s`);
  };

  testQueryTimes();

});