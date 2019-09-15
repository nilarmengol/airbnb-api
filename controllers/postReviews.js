const Review = require('../models/review')

module.exports = (req, res) => {

  Reviews.create(req.body).then(data => {
    Review.findById(data._id).populate('author').then(review => {
      res.send(review)
    })
  }).catch(err => {
    console.log(err)
    res.send(err)
  })
}