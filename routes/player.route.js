const router = require('express').Router();


//get All players
router.get('/',(req,res) => {
    res.send('here player');
});

//get Player by Id
router.get('/:id',(req,res) => {
    playerID = req.params.id
    res.send(`player id = ${playerID} now is showing`);
});

//add Player
router.post('/add',(req,res) => {
    res.send("player created !");
});

//delete Player by Id
router.delete('/delete/:id',(req,res) => {
    playerID = req.params.id
    res.send(`player ${playerID} deleted !`);
});

//update Player by Id
router.put('/update/:id', (req,res) => {
    playerID = req.params.id
    res.send(`player ${playerID} updated !`);
});


module.exports = router;