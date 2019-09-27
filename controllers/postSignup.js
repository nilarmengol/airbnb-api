const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {

	User.findOne({email: req.body.email}).then(user => {

		if (user) {
			res.send('you are already registered')
		}
		else {

				req.body.password= bcrypt.hashSync(req.body.password, 10)
			  User.create(req.body)
				.then(user => {
		      let obj = user.toObject();
		      let token = jwt.sign(obj, process.env.SECRET);
		      res.send(token);
		    })
				.catch(err => console.log(err))
	}
	})
	}
