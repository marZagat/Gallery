<<<<<<< HEAD
# Project Name
Photo Gallery component of WeGot, a clone of the food review site Zagat.com. This was part of a team project completed at Hack Reactor.

## Related Projects

  - https://github.com/bamboo-connection/recommendations
  - https://github.com/bamboo-connection/overview
  - https://github.com/bamboo-connection/map-side-bar

## Table of Contents

1. [Purpose](#purpose)
1. [Database](#database)
1. [Prerequisites](#prerequisites)
1. [APIKey](#GoogleAPIKey)
1. [Installation](#Installation)
1. [Tests](#tests)

## Purpose
This service forms a part of the WeGot food review website. It renders 6 recommended restaurants based on proximity to the current restaurant selected showing basic information about a restaurant, including the name, description, type, neighborhood, price level, WeGot and Google reviews summary. Clicking on the restaurant will take you to the newly selected restaurant page.

## Database
A MongoDB database that holds restaurant information.

## Seeding MongoDB
Seeding mongo can be done in two methods. First method will be by moving to the MongoScript folder and running "node seed.js" and this is assuming you have the mongodb connection already established with the commands mongod and mongo. Version two will require three terminal windows as you'll need go to the new_data folder in each window and run "node seed1.js" in one, node "seed2.js" in the next and finally "node seed3.js" in the last one. All terminals must be running node 9.7.0 or the latest version of node that can has updates for es7 syntax.

## Seeding PostgresQL
Seeding postgres will be performed in 5 separate terminals. First navigate to the PostgresQLScript directory and run "node seedRestaurant.js" after that, you can run the rest of the files in the terminal to seed the database; you can do this either concurrently or individually. Seeding takes about 5minutes per file to load 10 million rows into the table so it can either take 25minutes if you're doing it individually, or around 7-10minutes with concurrent insertions. Make your own judgement based on your computer's performance. All files will require node 9.7 or the latest version to run.

## Prerequisites
-npm -node -jest -webpack -MongoDB

## APIKey
To seed the database for the application, you will need a Google API key.

You can get an API Key from Google here: https://developers.google.com/maps/documentation/javascript/get-api-key

Duplicate config.example.js and rename it to config.js. Replace the placeholder strings in your newly created config.js with your Google API key.

NOTE: You've now created the file referenced in seed.js as config.js that your app requires in order to seed the database.

## Installation
1. Install dependencies: `-npm install`
2. Start database server: `-npm run database`
3. 
4. Run React Webpack: `-npm run react-dev`,
5. Start server: `-npm server`

To start, in your browser navigate to: http://localhost:3001

## Tests
Run: `npm run test`
