
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
	Place.find({}).lean().populate('types').then(data => {
		 res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}


let convertImage = (image) => {
	image = place.images[0]
}

let reviews = () =>  {

	return place.reviews.length

}
