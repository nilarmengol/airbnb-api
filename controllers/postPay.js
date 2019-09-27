const stripe = require("stripe")(process.env.SECRET_STRIPE_SK)


module.exports = (req, res) => {

stripe.charges.create({
  amount: req.body.amount*100,
  currency: 'usd',
  description: req.body.description,
  source: req.body.token
}).then(data => {
	 res.send(data)
})
.catch(err => {
	res.send(err)
})

}
