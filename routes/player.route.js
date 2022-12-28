const router = require('express').Router();


//get All players
router.get('/',(req,res) => {
    res.send('here player');
});

//get Player by Id
router.get('/:id',(req,res) => {
    res.send("brabra");
});

//add Player
router.post('/add',(req,res) => {
    res.send("player created !");
});

//delete Player by Id
router.delete('/delete/:id',(req,res) => {
    res.send("player deleted !");
});

//update Player by Id
router.put('/update/:id', (req,res) => {
    res.send('player updated !');
});


module.exports = router;