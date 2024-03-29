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

		if (age && !parseInt(age)) {
			response.send({
				header: {
					code: -1,
					message: 'age must be a number'
				},
				body: {}
			})
		}
		if (!age) {
			response.send({
				header: {
					code: -1,
					message: 'age must given'
				},
				body: {}
			})
		}
		if (username === 'admin' && password === 'admin') {
			response.send({
				header: {
					code: 1,
					message: 'admin logged in successfully'
				},
				body: {}
			})
		}
		if (username === 'azher' && password === 'sharif') {
			response.send({
				header: {
					code: 1,
					message: 'Azher Sharif logged in successfully'
				},
				body: {}
			})
		}

		response.status(404)
		response.send({
			header: {
				code: -1,
				message: 'invalid request'
			},
			body: {}
		})

	}
}
