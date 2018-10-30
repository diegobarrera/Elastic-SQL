const express = require('express')
const router = express.Router()
const {
  userController,
  postController
} = require('../controllers/index')

// TODO: Add sanitizer and param validator (joi)

// HEALTH CHECK
router.get('/', function (req, res, next) {
  res.send('ok')
}) 

// USER
router.post('/user', userController.create)

//POST
router.get('/posts', postController.getAll)
router.post('/post', postController.create)

module.exports = router