const Place = require('../models/place')
const Review = require('../models/review')

module.exports = (req, res) => {

  Place.findById(req.params.id).populate('host').populate('amenities').populate('type').populate('reviews').lean().then(place => {
    place.image = place.images[0]
    return Review.find({
      place: place._id
    }).populate('author').then(reviews => {
      place.review = reviews
      place.reviews = reviews.length
      res.send(place)
    })

  })



}