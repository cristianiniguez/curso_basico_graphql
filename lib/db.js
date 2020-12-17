'use strict';

const { MongoClient } = require('mongodb');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const mongoURL = encodeURI(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
);

let connection;

async function connectDB() {
  if (!connection) {
    try {
      const client = await MongoClient.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      connection = client.db(DB_NAME);
    } catch (error) {
      console.log(mongoURL);
      console.error('Could not connect to DB', error.message);
      process.exit(1);
    }
  }

  return connection;
}

module.exports = connectDB;
