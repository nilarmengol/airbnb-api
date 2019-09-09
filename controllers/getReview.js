const Type = require('../models/review')

module.exports = (req, res) => {
	Type.findById("5d7612e22e21bf1604242c7a").select('reviews').then(data => {
		 res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}
