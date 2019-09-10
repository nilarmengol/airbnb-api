
const Place = require('../models/place')
const Review = require('../models/review')

// module.exports = (req, res) => {
// 	Place.find({}).then(data => {
// 		 res.send(data)
// 	})
// 	.catch(err => {
// 		res.send(err)
// 	})
// }


// let b =  req.body
// let max_price =	{price: {$lte: req.body},}
// let min_guests =	{guests: {$gt: req.body}}
//
// let filter = max_price&&min_guests
//
//



module.exports = (req, res) => {
	Place.find({})
	.select('bedrooms city country images price reviews title type')
	.lean()
	.then(data => {
		console.log(data)
		let places = data.map(place => {
			place.image = place.images[0]
			delete place.images
			return Review.find({place: place._id}).then(reviews => {
				place.reviews = reviews.length
				return place
			})
		})
		Promise.all(places).then(data => {
			res.send(data)
		})
		})
		}



//
// let reviews = () =>  {
//
// 	return place.reviews.length
//
// }
//
// let avgRating = () => {
//
// let sumReviews = place.reviews.reduce((n,i) => n+i)
// return avg / place.reviews.length
//
// }
