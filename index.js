'use strict';

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 3000;

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

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log('Server listening on port', 3000);
});
