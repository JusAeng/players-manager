const {Player} = require('../models/player.model')


module.exports = {
    crete: async (req,res) => {
        // console.log(req)
        try{
            let temp = {
                name: req.body.name,
            };
            let player = new Player(temp);
            await player.save()
            return res.status(201).send(player);

        }catch(error){
            console.log(error);
            return res.status(400).send();
        }
    },
    getAll: async (req,res) => {
        try{
            let players = await Player.find()
            return res.status(200).send({players:players})
        }catch(error){
            console.log(error);
            return res.status(400).send();
        }
    },
    getByID: (req,res) => {
        return res.status(400)
    },

    deleteByID: (req,res) => {
        return res.status(400)
    },
    updateByID: (req,res) => {
        return res.status(400)
    },
}