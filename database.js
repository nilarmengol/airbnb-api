const mongoose = require('mongoose')

let database = mongoose.connect('mongodb://localhost:27017/airbnb', {userNewUrlParser: true}, (err) => {
    err ? console.log(err) : console.log('Connected to MongoDB')
})

module.export = database
