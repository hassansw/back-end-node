/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var TeacherCourse = require('../models/teacher_course.model')
var EnroledCourse = require('../models/enrolledCourses.model')

module.exports = {
	get : function (req, res){
		TeacherCourse.find({ teacher : req.user}).populate('teacher', '-pwd').populate('course').exec(function(error, result){
			console.log('The resulting body is: ' + result)
			res.send(result)
		})
	},
	post: function (req, res) {
		TeacherCourse.findOne({ _id: req.body._id}, function (error, result) {
			if (result) {
				result.courseStatus = 'Dropped'
				console.log('Course Dropped')
				result.save()
				res.send('Success')
			}
		})
	},
	manage : function (req, res){
		EnroledCourse.findOne({ _id : req.body.id}, function(error, result){
			if(req.body.response === 'enroll'){
				console.log(result)
				result.processStatus = 'Enrolled'
				result.save()
				res.send('accept')
			} else if(req.body.response === 'decline'){
				result.processStatus = 'Canceled'
				result.save()
				res.send('decline')
			}
		})
	}
}
