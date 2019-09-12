const Place = require('../models/place')
const Review = require('../models/review')

	module.exports = (req,res) => {

	Place.findById(req.params.id).populate('host').populate('amenities').populate('type').populate('reviews').lean().then(data => {


data.image = data.images[0]



		res.send(data)})



}
