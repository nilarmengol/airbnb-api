const stripe = require("stripe")(process.env.SECRET_STRIPE_SK)


module.exports = (req, res) => {

stripe.charges.create({
  amount: 20000,
  currency: 'usd',
  description: '',
  source: token
}).then(data => {
	 res.send(data)
})
.catch(err => {
	res.send(err)
})

}
