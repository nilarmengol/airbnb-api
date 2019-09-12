const Place = require('../models/place')
const Review = require('../models/review')

	module.exports = (req,res) => {

	Place.findById(req.params.id).select().populate('host').lean().then(data => {


data.image = data.images[0]



		res.send(data)})



}
