const Place = require('../models/place')

module.exports = (req, res) => {

Place.create({
title: 'Unbelievable Infinite Pool',
guests: 3,
price: 30,
country: 'Spain',
city: 'Barcelona',
type: 'hotel',
description: 'nice hotel'

}).then(data => {
	 res.send(data)
})
.catch(err => {
	res.send(err)
})

}
