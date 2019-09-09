const Amenity = require('../models/amenity')

module.exports = (req, res) => {
	Amenity.find({}).select().then(data => {
		 res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}
