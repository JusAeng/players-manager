const {Player} = require('../models/player.model')
const {getOVA} = require('../services/player.service')

module.exports = {
    crete: async (req,res) => {
        try{
            let temp = {
                name: req.body.name,
                position:req.body.position,
                class:req.body.class,
                dribble:req.body.dribble,
                speed:req.body.speed,
                shoot:req.body.shoot,
                defend:req.body.defend,
                pass:req.body.pass,
                physical:req.body.physical,
            };
            temp["ova"] = getOVA([temp.dribble,temp.speed,temp.shoot,temp.defend,temp.pass,temp.physical])
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
    getByID: async (req,res) => {
        try{
            let pid = req.params.id
            let player = await Player.findById(pid)
            return res.status(200).send(player)
        }catch(e){
            console.log(e)
            return res.status(400)
        }
    },
    getByStat: async(req,res) => {
        try{
            let temp = {...req.body}
            let players = await Player.find(temp)
            return res.status(200).send({players:players})
        }catch(e){
            console.log(e)
            return res.status(400).send("error")
        }
    },

    deleteByID: async (req,res) => {
        try{
            let pid = req.params.id
            let player = await Player.deleteOne({_id:pid})
            return res.status(200).send(player)
        }catch(e){
            console.log(e)
            return res.status(400)
        }
    },
    updateByID: async (req,res) => {
        try{
            let pid = req.params.id
            let player = await Player.findById(pid)
            player.name = req.body.name
            player.position = req.body.position
            player.class = req.body.class
            player.dribble = req.body.dribble
            player.speed = req.body.speed
            player.shoot = req.body.shoot
            player.defend = req.body.defend
            player.pass = req.body.pass
            player.physical = req.body.physical
            player.ova = getOVA([player.dribble,player.speed,player.shoot,player.defend,player.pass,player.physical])
            await player.save()

            return res.status(201).send(player);
        }catch(e){
            console.log(e)
            return res.status(400)
        }
    },
}