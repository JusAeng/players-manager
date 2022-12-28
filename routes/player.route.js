const router = require('express').Router();

router.get('/',(req,res) => {
    res.send('here player')
})

module.exports = router;