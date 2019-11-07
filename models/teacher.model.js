var mongoose = require('mongoose')

module.exports = mongoose.model('Teacher',{ //Creating a database schema or table
	fname: String,
	lname: String,
	email: String,
	pwd: String,
	contact : String,
	venue : String,
	type : String
})
