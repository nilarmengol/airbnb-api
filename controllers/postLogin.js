// const User = require('../models/user')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
//
// module.export = (req,res) => {
//
// req.body.pasword = bcrypt.compareSync(req.body.password, 10)
//
//
// User.findOne({email: req.body.email}).lean().then(user => {
//
// 	let match = bcrypt.compareSync(req.body.password, user.password)
//
// 	if (match) {
// 		delete: user.password
// 		res.send(user)
// 	}
// 	else {
// 		res.send('wrong')
// 	}
// }).catch(err =>
// 	console.log(err))
// }
