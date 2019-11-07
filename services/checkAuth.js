//Check Authenticatied User
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

var jwt = require('jwt-simple')
var moment = require('moment')

module.exports = function checkAuthenticated(req, res, next) {
	req.bod
	if(!req.header('Authorization')){
		return res.status(401).send({ message : 'Please make sure that your request has an authorized user'})
	}

	var token = req.header('Authorization')
	// var payload = jwt.decode(token, 'secret') //Decode the token the your secret keyword

	if(token  === '123456'){ 
		return req.status(401).send({ message : 'Invalid Acces ' })
	}

	// req.user = payload.sub
	next()

}
