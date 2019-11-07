var Teacher = require('../models/teacher.model')

module.exports = {
	get: function (req, resp) {
		Teacher.find({}).exec(function (err, result) { // Uses the Message schema to search for the Messages
			resp.send(result) // Return Results to the requesting Body...
		})
	}
}
