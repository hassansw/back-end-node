/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// Services
var cors = require('./services/cors')
var messages = require('./controllers/message')

// Attempt to connect to server...
var server = app.listen(process.env.PORT, function () {
	console.log('Server Launched ', server.address().port)
})

// Middleware
app.use(bodyParser.json()) // Specifying the type of data to send and recieve :for Now JSON
app.use(cors)

// Controller
// Message post: save messages to MongoDB Database
// app.post('/api/message', message.post)
// Message Retrieve and Send to browser...
app.get('/api/message', messages.get) // Retrieve data from MongoDB using getMessages() : function
