'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/math/area', function(request,response) {
  // can be circle or rectangle
  var type = request.body.type
  var radius = request.body.radius
  var width = request.body.width
  var height = request.body.height

  response.send(type + radius + width + height)
})


module.exports = router
