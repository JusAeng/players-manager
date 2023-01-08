const router = require('express').Router();
const playerController = require('../controllers/player.controller');

//get All players
router.get('/', async (req,res) => {
    const x = await playerController.getAll(req,res);
});

//get Player by Stat
router.get('/find',async (req,res) => {
    const x = await playerController.getByStat(req,res);
})

//get Player by Id
router.get('/:id', async (req,res) => {
    const x = await playerController.getByID(req,res);
});


//add Player
router.post('/add', async (req,res) => {
    const x = await playerController.crete(req,res);
});

//delete Player by Id
router.delete('/delete/:id', async (req,res) => {
    const x = await playerController.deleteByID(req,res);
});

//update Player by Id
router.put('/update/:id', async (req,res) => {
    const x = await playerController.updateByID(req,res);
});


module.exports = router;