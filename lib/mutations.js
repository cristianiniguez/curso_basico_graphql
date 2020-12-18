'use strict';

const { ObjectID } = require('mongodb');
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

  updateCourse: async (root, { _id, input }) => {
    try {
      const db = await connectDB();
      await db.collection('courses').updateOne({ _id: ObjectID(_id) }, { $set: input });
      const course = await db.collection('courses').findOne({ _id: ObjectID(_id) });
      return course;
    } catch (error) {
      console.error(error);
    }
  },

  createStudent: async (root, { input }) => {
    const newStudent = input;
    try {
      const db = await connectDB();
      const student = await db.collection('students').insertOne(newStudent);
      newStudent._id = student.insertedId;
      return newStudent;
    } catch (error) {
      console.error(error);
    }
  },

  updateStudent: async (root, { _id, input }) => {
    try {
      const db = await connectDB();
      await db.collection('students').updateOne({ _id: ObjectID(_id) }, { $set: input });
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) });
      return student;
    } catch (error) {
      console.error(error);
    }
  },
};
