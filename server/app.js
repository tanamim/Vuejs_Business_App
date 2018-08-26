const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 8081))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api) // let us use api routes
app.use(express.static('static')) // Common practice to setup access to static files

app.use(morgan('dev')) // logging

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err) // handle requests to unknown resources
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/globomantics')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')

  app.listen(app.get('port'), function () {
    console.log('API Server Listening on port ' + app.get('port') + '!')
  })
})
