/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var User = require('../models/user.model')
var Teacher = require('../models/teacher.model')

module.exports = {
	post: function (req, res) {
		console.log(req.user)

		User.findOne({ _id: req.user }, function (error, result) {
			console.log(result)
			result.fname = req.body.fname
			result.lname = req.body.lname
			result.address = req.body.address
			result.contact = req.body.contact
			res.send('Saved')
			result.save()
		})
	},
	get: function (req, res) {
		if (req.body.type === 'teacher') {
			Teacher.findOne({ _id: req.user }, function (error, result) {
				console.log(result)
				res.send(result)
			})
		} else {
			User.findOne({ _id: req.user }, function (error, result) {
				console.log(result)
				res.send(result)
			})
		}
	}
}
