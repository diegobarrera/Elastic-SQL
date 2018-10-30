'use strict';
const elastic = require('../library/products')

module.exports = (sequelize, DataTypes) => {
  
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    timestamp: true
  })

  Post.createPost = async function(newPost) {
    try {
      const post = await Post.create(newPost)
      await elastic.createPost()
      return post
    } catch (error) {
     return error 
    }
  }

  return Post;
};

