'use strict';

const { graphql, buildSchema } = require('graphql');

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`);

// configurar los resolvers
const resolvers = {
  hello: () => 'Hola Mundo',
  saludo: () => 'Hola a todos',
};

// ejecutar el query hello
graphql(schema, '{ saludo }', resolvers).then(console.log);
