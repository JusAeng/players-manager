const express = require('express')
const app = express()

const port = 3000

require('./routes')(app)

app.listen(port,console.log('server is run on port:',port))