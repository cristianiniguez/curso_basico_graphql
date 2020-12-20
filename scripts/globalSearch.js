// node scripts/globalSearch.js

const { request } = require('graphql-request');

async function search() {
  const query = `
    query generalSearch ($keyword: String!) {
      searchItems(keyword: $keyword){
        __typename
        ... on Course {
          title
          description
        }
        ... on Monitor {
          name
          phone
        }
        ... on Student {
          name
          email
        }
      }
    }
  `;

  const data = {
    keyword: process.argv[2] || '',
  };

  try {
    const result = await request('http://localhost:3000/api', query, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

search();
