'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'Diego',
        lastName: 'Barrera',
        email: 'diego@barrera.com' 
      }, {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com' 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
