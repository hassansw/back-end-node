var mongoose = require('mongoose')

module.exports = mongoose.model('StudentCourse',{
	user  : { type : mongoose.Schema.ObjectId, ref : 'User' },
	regCourse : { type : mongoose.Schema.ObjectId, ref : 'Course' }
})
