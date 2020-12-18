'use strict';

const { ObjectID } = require('mongodb');
const connectDB = require('./db');
const errorHandler = require('./errorHandler');

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
      errorHandler(error);
    }
  },

  updateCourse: async (root, { _id, input }) => {
    try {
      const db = await connectDB();
      await db.collection('courses').updateOne({ _id: ObjectID(_id) }, { $set: input });
      const course = await db.collection('courses').findOne({ _id: ObjectID(_id) });
      return course;
    } catch (error) {
      errorHandler(error);
    }
  },

  deleteCourse: async (root, { _id }) => {
    try {
      const db = await connectDB();
      await db.collection('courses').deleteOne({ _id: ObjectID(_id) });
      return _id;
    } catch (error) {
      errorHandler(error);
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
      errorHandler(error);
    }
  },

  updateStudent: async (root, { _id, input }) => {
    try {
      const db = await connectDB();
      await db.collection('students').updateOne({ _id: ObjectID(_id) }, { $set: input });
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) });
      return student;
    } catch (error) {
      errorHandler(error);
    }
  },

  deleteStudent: async (root, { _id }) => {
    try {
      const db = await connectDB();
      await db.collection('students').deleteOne({ _id: ObjectID(_id) });
      return _id;
    } catch (error) {
      errorHandler(error);
    }
  },

  addPeople: async (root, { courseID, personID }) => {
    try {
      const db = await connectDB();

      const course = await db.collection('courses').findOne({ _id: ObjectID(courseID) });
      const person = await db.collection('students').findOne({ _id: ObjectID(personID) });

      if (!course || !person) throw new Error('La persona o el curso no existe');

      await db
        .collection('courses')
        .updateOne({ _id: ObjectID(courseID) }, { $addToSet: { people: ObjectID(personID) } });

      const updatedCourse = await db.collection('courses').findOne({ _id: ObjectID(courseID) });
      return updatedCourse;
    } catch (error) {
      errorHandler(error);
    }
  },
};
