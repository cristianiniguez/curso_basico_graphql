'use strict';

const { MongoClient } = require('mongodb');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const mongoURL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let connection;

async function connectDB() {
  if (!connection) {
    try {
      const client = await MongoClient.connect(mongoURL, {
        useNewUrlParser: true,
      });
      connection = client.db(DB_NAME);
    } catch (error) {
      console.log(mongoURL);
      console.error('Could not connect to DB', err.message);
      process.exit(1);
    }
  }

  return connection;
}

module.exports = connectDB;
