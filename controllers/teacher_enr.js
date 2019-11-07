/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var TeacherCourse = require('../models/teacher_course.model')
var Course = require('../models/course.model')

module.exports = {
	post: function (req, res) {
		console.log(req.body, req.user)
		req.body.teacher = req.user
		var course = new TeacherCourse(req.body)
		course.save()
		res.status(200)
		res.send('Yeah')
	},
	get: function (req, res) {
		Course.find({}).exec(function (err, result) { // Uses the Message schema to search for the Messages
			res.send(result) // Return Results to the requesting Body...
			console.log(result)
		})
        // Course.find({}).exec(function(err, result) { // Uses the Message schema to search for the Messages
        //     result.forEach( function(element) {
        //         finn += element+',';
        //     })
        //     console.log(finn);
        // });
	}
}
