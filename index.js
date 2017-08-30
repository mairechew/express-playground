var express = require ('express')
var app = express()
var calculate = require('./calculate.js')
var area = require('./area.js')
var sum = require('./sum.js')
var piNum = Math.PI.toString()

app.get('/', function (request,response) {
  console.log('Server running on port 8080...')
  response.send('Your server is live!')
})

app.get('/math/pi', function (request,response) {
  response.send(piNum)
})

app.use(calculate)
app.use(area)
app.use(sum)




app.get('/math/volume/:length/:width/:height',
 function(request,response) {
  var length = request.params.length;
  var width = request.params.width;
  var height = request.params.height;
  var area = Number(length*width*height)
  response.send("The volume of a " + length + "x" + width + "x" + height + " rectangle is " + area.toString())
})





app.get('*', function (request,response) {
  response.status(400)
  response.send('Wrong page dude! Try again.')
})


app.listen(8080)
