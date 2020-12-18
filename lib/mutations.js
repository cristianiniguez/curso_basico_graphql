'use strict';

const connectDB = require('./db');

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = { teacher: '', topic: '' };
    const newCourse = Object.assign(defaults, input);
    try {
      const db = await connectDB();
      const course = await db.collection('courses').insertOne(newCourse);
      newCourse._id = course.insertedId;
      return newCourse;
    } catch (error) {
      console.error(error);
    }
  },
};
