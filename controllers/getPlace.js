const Place = require('../models/place')

	module.exports = (req,res) => {
		Place.findById(req.params.id).populate({
  path: 'user',
  select: 'name avatar'
}).select().then(data => {
			 res.send(data)
		})
		.catch(err => {
			res.send(err)
		})
		}
