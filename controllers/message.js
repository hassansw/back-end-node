module.exports = {
	get: function (request, response) {
		const myname = 'azher'
		const toSend = {
			name: myname,
			age: 32
		}
		response.send(toSend)
	},

	post: function (request, response) {
		const { username, password, age } = request.body

		if (!parseInt(age)) {
			res.send({
				header: {
					code: -1,
					message: 'age must be a number'
				},
				body: {}
			})
		} else if (username === 'admin' && password === 'admin') {
			res.send({
				header: {
					code: 1,
					message: 'admin logged in successfully'
				},
				body: {}
			})
		} else if (username === 'azher' && password === 'sharif') {
			res.send({
				header: {
					code: 1,
					message: 'Azher Sharif logged in successfully'
				},
				body: {}
			})
		} else {
			res.status(404)
		}
	}
}
