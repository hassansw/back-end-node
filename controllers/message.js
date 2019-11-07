// var Message = require('../models/message.model')

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
		
		// res.status(200)
	}
}
