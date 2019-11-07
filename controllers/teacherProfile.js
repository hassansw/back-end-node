/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var Teacher = require('../models/teacher.model')

module.exports = {
	post: function (req, res) {
		console.log(req.user)

		Teacher.findOne({ _id: req.user }, function (error, result) {
			console.log(result)
			result.fname = req.body.fname
			result.lname = req.body.lname
			result.venue = req.body.venue
			result.contact = req.body.contact
			res.send('Saved')
			result.save()
		})
	},
	get: function (req, res) {
		Teacher.findOne({ _id: req.user }, function (error, result) {
			console.log(result)
			res.send(result)
		})
	}
}
