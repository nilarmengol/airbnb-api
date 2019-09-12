const Place = require('../models/place')
const Review = require('../models/review')
module.exports = (req, res) => {
   let x = {}
   if (req.query.max_price){
       x.price = {$gte: req.query.max_price}
   }
   if (req.query.min_jacks){
       x.bathrooms = {$gte: req.query.min_jacks}
   }
   if (req.query.min_guests){
       x.guests = {$gte: req.query.min_guests}
   }


   Place.find()
   .select('bedrooms city country images price reviews title type')
   .populate('type')
   .populate('amenities')
	 .populate('reviews')
   .populate({path: 'host', select: 'name avatar'})
   .lean()
   .then(data => {

       let places = data.map(place => {
           place.image = place.images[0]
    delete place.images
           return Review.find({place: place._id}).then(reviews => {
               place.reviews = reviews.length
if (reviews.length === 0) {
	place.rating = 0
} else {
								let rating = reviews.map(r => {
										return r.rating
									}).reduce((t,i) => t + i)
									place.rating = rating / reviews.length
								}
               return place

           })
       })
       Promise.all(places).then(data => {
           res.send(data)
       })
   })
}
