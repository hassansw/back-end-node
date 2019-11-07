/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var User = require('../models/user.model')
var Teacher = require('../models/teacher.model')
var jwt = require('jwt-simple')
var moment = require('moment')

module.exports = {
	register: function (req, res) {
		console.log(req.body)

		if (req.body.type == 'teacher') {
			Teacher.findOne({ email: req.body.email}, function (error, extUser) {
				if (extUser) return console.log('User already Exists with the email' + req.body.email + ' try a different One.')

				var teacher = new Teacher(req.body)
				teacher.save(function (error, result) {
					if (error) {
						console.log('An error Occured while saving to database'); res.status(500)
					} else {
						res.status(200).send({ token: createToken(teacher) })
						console.log(result)
					}
				})
			})
		} else if (req.body.type == 'student') {
			User.findOne({ email: req.body.email}, function (error, existingUser) {
				if (existingUser) {
					res.send('exists')
					return console.log('User already Exist with the email' + req.body.email + '. Try a different One')
				}
				var user = new User(req.body)

				user.save(function (error, result) { //
					if (error) {
						console.log('An error Occured while saving to database.' + error.message)
						res.status(500)
					}
					res.status(200).send({ token: createToken(user)})
					console.log(result)
				})
			})
		}
	},
	login: function (req, res) {
		if (req.body.type == 'teacher') {
			Teacher.findOne({
				email: req.body.email
			}, function (error, user) {
				if (!user) return res.send({ dbResponse: 'not_exists'})

				if (req.body.pwd == user.pwd) {
					console.log(req.body, user.pwd)
					res.send({ token: createToken(user), dbResponse: 'login_success', type: 'teacher'})
				} else {
					res.status(401).send({ message: 'Invalid auth ...'})
				}
			})
		} else {
			User.findOne({
				email: req.body.email
			}, function (error, user) {
				if (!user) return res.send({ dbResponse: 'not_exists'})

				if (req.body.pwd == user.pwd) {
					console.log(user)
					res.send({ token: createToken(user), dbResponse: 'login_success', type: 'student'})
				} else {
					console.log('Invalid Username or Password')
					res.send({ dbResponse: 'login_invalid'})
					res.status(401).send({ message: 'Invalid auth...'})
				}
			})
		}
	}

}
function createToken (user) {
	var payload = {
		sub: user._id,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()
	}
	return jwt.encode(payload, 'secret')
}
