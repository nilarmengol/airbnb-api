const express = require('express')
const app = express()
const database = require('./controllers/database')



app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.listen(4000, () => {
    console.log('Ready on port 4000');
})
