const Place = require('../models/place')

	module.exports = (req,res) => {
		Place.find({}).lean().then(data => {
			let places = data.map(p => {
				return Review.find({place: p._id}).then(reviews => {
					p.reviews = reviews.length
					return p
				})
			})
			Promise.all(places).then(data => {
				res.send(data)
			})
		})
	}
