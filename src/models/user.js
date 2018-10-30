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
  User.createUser = async function(newUser) {
    try {
      const user = await User.create(newUser)
      return user
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