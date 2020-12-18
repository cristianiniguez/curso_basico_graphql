'use strict';

const { ObjectID, ObjectId } = require('mongodb');
const connectDB = require('./db');

module.exports = {
  Course: {
    people: async ({ people }) => {
      try {
        const db = await connectDB();
        const ids = people ? people.map((id) => ObjectId(id)) : [];

        const peopleData =
          ids.length > 0
            ? await db
                .collection('students')
                .find({ _id: { $in: ids } })
                .toArray()
            : [];
        return peopleData;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
