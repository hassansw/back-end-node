/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var EnrollToCourse = require('../models/enrolledCourses.model')

module.exports = {
	get: function (req, res) {
		EnrollToCourse.find({ user: req.user }).populate({ path: 'enrolledCourse', populate: { path: 'course', model: 'Course' } }).populate({ path: 'enrolledCourse', populate: { path: 'teacher', model: 'Teacher'} }).populate('user', '-pwd').exec(function (error, result) {
			if (error) {
				res.send('Error')
			} else {
				res.send(result)
			}
		})
	},
	post: function (req, res) {
		EnrollToCourse.findOne({ _id: req.body._id}, function (error, result) {
			if (result) {
				result.courseStatus = 'Dropped'
				res.send('Dropped')
				console.log('Course Dropped')
				result.save()
			}
		})
	}
}
