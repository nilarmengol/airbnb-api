
const Place = require('../models/place')

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
	Place.find({}).select('bedrooms city country images price reviews title type').lean().then(data => {

data.map(place => {
	place.image = place.images[0]
 delete place.images
 place.reviews = place.reviews.length
})


// reviews = place.reviews.length
//
// 		let convertImage = (image) => {
// 			image = place.images[0]
// 		}



		res.send(data)
	})
	.catch(err => {
		res.send(err)
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
