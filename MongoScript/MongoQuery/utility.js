const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let fetchOne = (id, callback) => {
  let query = {
    'place_id': parseInt(id, 10) //change to int because its id in the db is an int and not a string
  };

  MongoClient.connect(url, (err, client, db) => {
    if (err) throw err;
    db = client.db('photos');
  
    db.collection('photos').find(query, {_id: 0}).toArray((err, result) => {
      if (err) throw err;
      client.close();
      callback(err, result[0]);
    });
  });
};

module.exports.fetchOne = fetchOne;