var app = require('./app')

var port = process.env.PORT || 2323

app.listen(port, function() {
  console.log('listening on *:' + port)
})
