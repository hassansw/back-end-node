var mongoose = require('mongoose')

module.exports = mongoose.model('Message',{ //Creating a database schema or table
	msg: String
	//user : { type : mongoose.Schema.ObjectId, ref : 'User'}
})
