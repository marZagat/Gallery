const request = require('supertest')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const utility = require('../MongoScript/MongoQuery/utility.js');
const MongoClient = require('mongodb').MongoClient;

//connect to MongoClient
MongoClient.connect('mongodb://localhost:27017');

// mongoose.connect('mongodb://localhost/photos');

const Photos = require('../database/index.js');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// serve static files from dist dir
app.use('/restaurants/:id', express.static(path.join(__dirname, '../client/dist')));

//retrieve data using new database
app.get('/api/restaurants/:id/gallery', (req, res) => {
  let id = req.params.id;

  utility.fetchOne(id, (err, data) => {
    if (err) {
      console.log(`encountered internal server error`);
      res.status(500);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(2222, () => console.log('Gallery App listening on port 2222!'));

module.exports = app;
