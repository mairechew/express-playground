var express = require('express')
var app = express()

app.get('/math/volume/:length/:width/:height',
 function(request,response) {
  var length = query.params.length;
  var width = query.params.width;
  var height = query.params.height;
  var area = Number(length*width*height)
  response.send("The volume of a " + length + "x" + width + "x" + height + " rectangle is " + area.toString())
}
