const express = require('express')
const router = express.Router()
const {userController, postController } = require('../controllers/index')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('pong')
})

// USER
router.post('/user', userController)

//POST
router.get('/posts', postController.getAll)
router.post('/post', postController.create)

module.exports = router
