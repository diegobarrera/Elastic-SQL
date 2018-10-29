'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    timestamp: true
  });
  
  Comment.associate = function(models) {
    // associations can be defined here
  };

  return Comment;
};