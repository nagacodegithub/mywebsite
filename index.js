const express = require('express')
const bodyParser= require('body-parser')
const app = express()

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

// All your handlers here...
app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html')})
app.post('/quotes', (req, res) => {res.send(req.body.quote)})
app.listen(3000, function() {
  console.log('listening on 3000')
})
