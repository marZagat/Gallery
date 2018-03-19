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

const insertRestaurant = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateRestaurant(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'name'],
    { table: 'restaurant' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`restaurants stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const insertPhotos = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generatePhotos(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'url1', 'url2','url3','url4','url5','url6','url7','url8','url9','url10', 'photo_id'],
    { table: 'photos' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`photos stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const insertDimensions = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateDimensions(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'width', 'height', 'dimension_id'],
    { table: 'dimensions' },
  );

  const query = pgp.helpers.insert(data, cs);

  return dbt.none(query)
    .then((data) => {
      console.log(`dimensions stored ${start + 1000}!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const insertUsers = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateUsers(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'name', 'user_id'],
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

const insertAvatars = (start) => {
  const data = [];
  for (let i = start; i < start + 1000; i += 1) {
    data.push(generateData.generateAvatars(i, dataSize));
  }
  const cs = new pgp.helpers.ColumnSet(
    ['id', 'name', 'avatar_id'],
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

const createRestaurant = () => {
  dbt.none(`CREATE TABLE restaurant(id INTEGER PRIMARY KEY, name TEXT);`)
    .then((data) => {
      console.log('restaurant table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertRestaurant(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const createPhotos = () => {
  dbt.none(`CREATE TABLE photos(id INTEGER PRIMARY KEY, url1 TEXT, url2 TEXT, url3 TEXT, url4 TEXT, url5 TEXT,
    url6 TEXT, url7 TEXT, url8 TEXT, url9 TEXT, url10 TEXT, photo_id INTEGER REFERENCE restaurant);`)
    .then((data) => {
      console.log('photos table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertPhotos(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const createDimensions = () => {
  dbt.none(`CREATE TABLE dimensions(id INTEGER PRIMARY KEY, height INTEGER, width INTEGER, dimension_id INTEGER REFERENCE photos);`)
    .then((data) => {
      console.log('dimensions table successfully created');
    })
    .then(async () => {
      for (let i = 0; i < dataSize; i += 1000) {
        await insertDimensions(i);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const createUsers = () => {
  dbt.none(`CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT, user_id INTEGER REFERENCE restaurant);`)
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

const createAvatars = () => {
  dbt.none(`CREATE TABLE avatars(id INTEGER PRIMARY KEY, url1 TEXT, url2 TEXT, 
    url3 TEXT, url4 TEXT, url5 TEXT, avatar_id INTEGER REFERENCE users);`)
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

const createDB = () => {
  db.none('CREATE DATABASE restaurants;')
    .then((data) => {
      console.log('successfully created');
    })
    .then(() => {
      createRestaurant();
    })
    .then(() => {
      createPhotos();
    })
    .then(() => {
      createDimensions();
    })
    .then(() => {
      createUsers();
    })
    .then(() => {
      createAvatars();
    })
    .catch((error) => {
      console.log(error);
    });
};

createDB();

// const createDB = async () => {
  
// }