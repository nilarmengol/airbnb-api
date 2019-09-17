const stripe = require("stripe")(process.env.SECRET_STRIPE_SK)

stripe.charges.create({
  amount: 20000,
  currency: 'usd',
  description: '',
  source: token
}).then(data => {})
