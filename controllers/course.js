/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
var Course = require('../models/course.model')

module.exports = {
	post: function (req, res) {
		console.log(req.body)
		var course = new Course(req.body)
		course.save()
		res.status(200)
	}
}
