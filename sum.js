'use strict'

var express = require('express')
var router = express.Router()


router.post('/math/sum', function(request,response) {
var answer = 0;
var math = ""
var n = request.query.n;

for (var i=0; i<n.length; i++) {
  var total = Number(n[i])
  math += total
  answer += total
  if (i<=(n.length-2)) {
    math += " + "
  }
}
response.send(math + " = " + answer)
})

module.exports = router
