const Type = require('../models/user')

module.exports = (req, res) => {

Type.create(req.body).then(data => {
	 res.send(data)
})
.catch(err => {
	res.send(err)
})

}
