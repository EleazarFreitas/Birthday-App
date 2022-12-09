'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Birthdays', [{
       firstName: 'Eleazar',
       lastName: 'Freitas',
       dateOfBirth: '1990-12-04',
       avatar: 'avatar.png',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
    {
      firstName: 'Jessica',
       lastName: 'Lins',
       dateOfBirth: '1993-05-30',
       avatar: 'avatar.png',
       createdAt: new Date(),
       updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Birthdays', null, {});
  }
};
