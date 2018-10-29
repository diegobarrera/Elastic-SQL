'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    timestamp: true
  });

  Post.associate = function(models) {
    // associations can be defined here
    models.Post.hasMany(models.Comment)
  };

  return Post;
};

