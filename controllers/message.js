var Message = require('../models/message.model')

module.exports = {
	get: function (req, resp) {
		Message.find({}).populate('user', '-pwd').exec(function (err, result) { // Uses the Message schema to search for the Messages
			console.log(result)
			resp.send(result) // Return Results to the requesting Body...
		})
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
