const { ObjectID } = require('mongodb');
const connectDB = require('./db');
const errorHandler = require('./errorHandler');

module.exports = {
  getCourses: async () => {
    try {
      const db = await connectDB();
      const courses = await db.collection('courses').find().toArray();
      return courses;
    } catch (error) {
      errorHandler(error);
    }
  },

  getCourse: async (root, { _id }) => {
    try {
      const db = await connectDB();
      const course = await db.collection('courses').findOne({ _id: ObjectID(_id) });
      return course;
    } catch (error) {
      errorHandler(error);
    }
  },

  getPeople: async () => {
    try {
      const db = await connectDB();
      const students = await db.collection('students').find().toArray();
      return students;
    } catch (error) {
      errorHandler(error);
    }
  },

  getPerson: async (root, { _id }) => {
    try {
      const db = await connectDB();
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) });
      return student;
    } catch (error) {
      errorHandler(error);
    }
  },
};
