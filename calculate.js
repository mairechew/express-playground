'use strict'
var express = require('express')
var router = express.Router()

router.get('/math/calculate', function (request, response) {
  var operation = request.query.operation;
  var total = 0;
  var sign = ''

  var x = Number(request.query.x);
  var y = Number(request.query.y);

  if (operation == 'add') {
    total = x+y
    sign = '+'
  } else if (operation == 'subtract') {
    total = x - y
    sign = '-'
  } else if (operation == 'multiply') {
    total = x * y
    sign = '*'
  } else if (operation == 'divide') {
    total = (x / y)
    sign = '/'
  }
  response.send(x + " " + sign + " " + y + " " + '=' + " " +  total )
  })

module.exports = router
