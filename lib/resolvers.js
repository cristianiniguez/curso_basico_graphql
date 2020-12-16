'use strict';

const courses = [
  {
    _id: 1,
    title: 'curso 1',
    teacher: 'profesor 1',
    description: 'descripcion 1',
    topic: 'programacion',
  },
  {
    _id: 2,
    title: 'curso 2',
    teacher: 'profesor 2',
    description: 'descripcion 2',
    topic: 'diseño',
  },
  {
    _id: 3,
    title: 'curso 3',
    teacher: 'profesor 3',
    description: 'descripcion 3',
    topic: 'maquetacion',
  },
];

module.exports = {
  getCourses: () => courses,
};
