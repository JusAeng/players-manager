const express = require('express')
const player = require('./player.route');


module.exports = (app) => {
    app.use(express.json());
    app.use('/api/players',player);
}