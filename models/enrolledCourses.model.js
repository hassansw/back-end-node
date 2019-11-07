var mongoose = require('mongoose')

module.exports = mongoose.model('EnrolledCourses',{
	enrolledCourse : { type : mongoose.Schema.ObjectId, ref : 'TeacherCourse'},
	user : { type : mongoose.Schema.ObjectId, ref : 'User'},
	courseStatus : String,
	processStatus : String
})
