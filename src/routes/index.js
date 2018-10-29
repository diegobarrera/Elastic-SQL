const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('pong')
})

router.get('/test', controller.test)
router.get('/elastic', controller.elasticSearch)

module.exports = router
