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

  getStudents: async () => {
    try {
      const db = await connectDB();
      const students = await db.collection('students').find().toArray();
      return students;
    } catch (error) {
      console.error(error);
    }
  },

  getStudent: async (root, { _id }) => {
    try {
      const db = await connectDB();
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) });
      return student;
    } catch (error) {
      console.error(error);
    }
  },
};
