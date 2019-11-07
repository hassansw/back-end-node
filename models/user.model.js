var mongoose = require('mongoose')

module.exports = mongoose.model('User',{ //Creating a database schema or table
	fname: String,
	lname: String,
	email: String,
	contact : String,
	address : String,
	pwd: String,
	type : String
})
