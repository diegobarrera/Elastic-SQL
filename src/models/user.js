'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    timestamp: true
  });

  sequelize.models.User.hasMany(sequelize.models.Post)

  // Class methods
  User.createUser = async function() {
    try {
      const user = await User.create({
        firstName: 'Diego',
        lastName: 'Barrera',
        email: 'diego@barrera.com' 
      })
    } catch (error) {
     return error 
    }
  }

  
  // Instance Method
  // User.prototype.getPosts = function () {
  //   //console.log(this)
  // }
  
  return User;
};