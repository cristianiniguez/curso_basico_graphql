const { ObjectID } = require('mongodb');
const connectDB = require('./db');

module.exports = {
  getCourses: async () => {
    try {
      const db = await connectDB();
      const courses = await db.collection('courses').find().toArray();
      return courses;
    } catch (error) {
      console.error(error);
    }
  },
  getCourse: async (root, { _id }) => {
    try {
      const db = await connectDB();
      const course = await db.collection('courses').findOne({ _id: ObjectID(_id) });
      return course;
    } catch (error) {
      console.error(error);
    }
  },
};
