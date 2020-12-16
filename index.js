'use strict';

const { graphql, buildSchema } = require('graphql');

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// ejecutar el query hello
graphql(schema, '{ hello }').then(console.log);
