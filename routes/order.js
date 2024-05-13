const {
    addOrder,
    removeOrder
} = require('../controllers/order')

const router = require("express").Router()

router.post('/addOrder', addOrder)
router.delete('/removeOrder', removeOrder)

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router