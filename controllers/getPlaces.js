
const Place = require('../models/place')

// module.exports = (req, res) => {
// 	Place.find({}).then(data => {
// 		 res.send(data)
// 	})
// 	.catch(err => {
// 		res.send(err)
// 	})
// }

module.exports = (req, res) => {
	Place.findbyId(req.params.id).select('-price').then(data => {
		 res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}
