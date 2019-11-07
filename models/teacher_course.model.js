var mongoose = require('mongoose')

module.exports = mongoose.model('TeacherCourse',{
	teacher : { type : mongoose.Schema.ObjectId, ref : 'Teacher'},
	course : { type : mongoose.Schema.ObjectId, ref : 'Course' },
	stdFee : Number,
	studyBoard : String,
	courseStatus : String,
	courseDuration : Number,
	courseHours : Number,
	weeklyClass : Number
})
