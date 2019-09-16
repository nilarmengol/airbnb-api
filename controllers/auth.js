const User = requiere('../models/user')
const jwt = require('jsonwebtoken')

module.export = (req, res) => {

	let token = req.query.token
	let user = jwt.verify(token, process.env.SECRET)
	console.log('user', user)
	res.send(user)

}
