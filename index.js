var express = require ('express')
var app = express()
var piNum = Math.PI.toString()

app.get('/', function (request,response) {
  console.log('Server running on port 8080...')
  response.send('Your server is live!')
})

app.get('/math/pi', function (request,response) {
  response.send(piNum)
})

app.get('/math/calculate/:operation/:x/:y', function (request, response) {
  var operation = request.params.operation;
  var num1 = Number(request.params.x);
  var num2 = Number(request.params.y);
  var total = 0;
  if (operation == 'add') {
    total = num1+num2
  } else if (operation == 'subtract') {
    total = num1 - num2
  } else if (operation == 'multiply') {
    total = num1 * num2
  } else if (operation == 'divide') {
    total = (num1 / num2)
  }
  response.send(total.toString())
})

// app.post('/math/sum', function(request,response) {
// ...declare variable
// ...set variable.id to json object.length
// ...push json object to body of request
// ...send response to server
// })


app.get('*', function (request,response) {
  response.status(400)
  response.send('Wrong page dude! Try again.')
})


app.listen(8080)
