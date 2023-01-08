const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        require: true,
    },
    class: {
        type: Number,
        require: true,
    },
    dribble:{
        type:Number,
        required : true,
    },
    speed:{
        type:Number,
        required : true,
    },
    shoot:{
        type:Number,
        required : true,
    },
    defence:{
        type:Number,
        required : true,
    },
    pass:{
        type:Number,
        required : true,
    },
    physical:{
        type:Number,
        required : true,
    },
    ova:{
        type:Number,
        required : true,
    },

},{
        versionKey: false // You should be aware of the outcome after set to false
    }
);

const Player = mongoose.model('Player', playerSchema);
exports.Player = Player;