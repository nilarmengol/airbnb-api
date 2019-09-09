
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
	Place.find({guests: {$gt: req.body.guests}}).select().then(data => {
		 res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}
