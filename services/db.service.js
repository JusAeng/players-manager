const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.MONGO_URI)
.then(() => console.log('connect to mongo...'))
.catch((e) => console.error('error ',e))