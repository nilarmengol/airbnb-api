const mongoose = require('mongoose')

const Place = mongoose.model('place', {
	images: [String],
	amenities:[{
		type: mongoose.Schema.Types.ObjectId,
	  ref: 'amenity'
  }],
	bedrooms: {
    type: Number,
    required: [true, 'Number of bathrooms is required']
  },
	city: {
    type: String,
    required: [true, 'City is required']
  },
	created: {
    type: Date,
    default: Date.now
  },
	country: {
    type: String,
    required: [true, 'Country is required']
  },
	description: {
    type: String,
    required: [true, 'Description is required']
  },
	guests: {
    type: Number,
    required: [true, 'Number of guests is required']
  },
	price:  {
	    type: Number,
	      required: [true, 'Price is required']
	  },
		title:  {
		    type: String,
		      required: [true, 'Title is required']
		  },
		rating: {
			type: Number,
	    default: 0
		},
	type: {
		type: mongoose.Schema.Types.ObjectId,
	  ref: 'type'
  },
	host: {
		type: mongoose.Schema.Types.ObjectId,
	  ref: 'user'
	}
})

module.exports = Place
