const Place = require('../models/place')

	module.exports = (req,res) => {
		Place.findById(req.params.id).populate('types').then(data => {
			 res.send(data)
		})
		.catch(err => {
			res.send(err)
		})

		}
