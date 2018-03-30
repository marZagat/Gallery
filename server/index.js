require('newrelic');
const request = require('supertest')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const utility = require('../MongoScript/MongoQuery/utility.js');
const MongoClient = require('mongodb').MongoClient;
const redis = require('redis');
const cluster = require('cluster');

const DOCKER = `database`;
const LOCAL = `localhost`;
const url = `mongodb://${LOCAL}:27017`;

//connect to MongoClient
MongoClient.connect(url);

console.log('this is the server page url: ', url); // debugging statement 

const Photos = require('../database/index.js');

//cluster setup
// if (cluster.isMaster) {
//   let numWorkers = require('os').cpus().length;

//   console.log('Master cluster setting up ' + numWorkers + ' workers...');

//   for (let i = 0; i < numWorkers; i++) {
//       cluster.fork();
//   }

//   cluster.on('online', (worker) => {
//       console.log('Worker ' + worker.process.pid + ' is online');
//   });

//   cluster.on('exit', (worker, code, signal) => {
//       console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
//       console.log('Starting a new worker');
//       cluster.fork();
//   });
// } else {
  const app = express();

  // const client = redis.createClient(6379);

  const client = redis.createClient({
    host: 'redis'
  });

  app.use(cors());

  app.use(bodyParser.json());

  // serve static files from dist dir
  app.use('/restaurants/:id', express.static(path.join(__dirname, '../client/dist')));

  //retrieve data using redis if it exists
  const cache = (req, res, next) => {
    let id = req.params.id;
    client.get(id, (err, data) => {
      if (err) throw err;

      if (data != null) {
        let parsedData = JSON.parse(data);
        res.status(200).send(parsedData);
      } else {
        next();
      }
    });
  }

  //redis middlesware
  app.get('/api/restaurants/:id/gallery', cache);

  //retrieve data using new database
  app.get('/api/restaurants/:id/gallery', (req, res) => {
    let id = req.params.id;

    utility.fetchOne(id, (err, data) => {
      if (err) {
        console.log(`encountered internal server error`);
        res.status(500);
      } else {
        client.setex(id, 5000, JSON.stringify(data));
        res.status(200).send(data);
      }
    });
  });

  app.listen(2222, () => console.log('Gallery App listening on port 2222!'));
// }

// module.exports = app;
