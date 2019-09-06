const express = require('express')
const app = express()
const database = require('./database')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/places', require('./controllers/postPlace'))
app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlace'))
app.post('/places', require('./controllers/getPlace'))
app.get('/places/:id', require('./controllers/getPlace'))


app.listen(4000, () => {
    console.log('Ready on port 4000')
})
