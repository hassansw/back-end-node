/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
var TeacherCourse = require('../models/teacher_course.model')
var StudentEnroll = require('../models/student_course.model')

module.exports = {
	post: function (req, res) {
		req.body.user = req.user
		req.body.courseData.forEach(function (element) {
			console.log(element.id, element.name)
			var studEnrol = new StudentEnroll({ user: req.body.user, regCourse: element.id})
			studEnrol.save()
			res.send('Success')
		})
	},
	get: function (req, res) {
		TeacherCourse.find({}).populate('course').populate('teacher', '-pwd').exec(function (error, result) {
			console.log(result)
			res.send(result)
		})
	}
}
