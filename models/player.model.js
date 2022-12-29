const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }},{
        versionKey: false // You should be aware of the outcome after set to false
    }
);

const Player = mongoose.model('Player', playerSchema);
exports.Player = Player;