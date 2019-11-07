/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var SelectedCourse = require('../models/student_course.model')
var EnrollToCourse = require('../models/enrolledCourses.model')

module.exports = {
	get: function (req, res) {
		console.log(req.user)
		SelectedCourse.find({ user: req.user }).populate('regCourse').populate('user', '-pwd').exec(function (error, result) {
			res.send(result)
			console.log(result)
		})
	},
	post: function (req, res) {
		EnrollToCourse.findOne({
			enrolledCourse: req.body.enrolledCourse
		}, function (error, result) {
			if (result) {
				console.log(result)
				console.log('Already enrolled with the course with that teacher.')
				res.send('AlreadyEnrolled')
			} else {
				req.body.user = req.user
				req.body.courseStatus = 'Active'
				req.body.processStatus = 'Pending'
				console.log(req.body)
				var enrollToCourse = new EnrollToCourse(req.body)
				enrollToCourse.save()
				res.send('Processing')
				res.status(200)
			}
		})
	},
	getEnrolledCourses: function (req, res) {
		EnrollToCourse.find({}).populate({ path: 'enrolledCourse', populate: { path: 'course', model: 'Course' } }).populate('user', '-pwd').exec(function (error, result) {
			if (error) {
				res.send('Error')
			} else {
				console.log(result)
				res.send(result)
			}
		})
	}
}
