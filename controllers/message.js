var Message = require('../models/message.model')

module.exports = {
	get: function (request, response) {
		const myname = 'azher'
		const toSend = {
			name: myname,
			age: 32
		}
		response.send(toSend)
	},

	post: function (req, res) {
		// save messages ti db.
		console.log(req)
		console.log(req.body) // To display incomming request in the console
		var message = new Message(req.body) // storing the incomming message in a the dataBase

		message.save()
		res.status(200)
	}
}
