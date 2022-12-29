const config = require('./config')
const express = require('express')
const app = express()

//DB
require('./services/db.service')

// Routes
require('./routes')(app)


app.listen(config.PORT || 8001,console.log('server is run on port:',config.PORT || 8001))