const {
    getAllSeats,
    addSeat
} = require("../controllers/seat")

const router = require("express").Router()

router.post('/allSeats', getAllSeats)
router.post('/addSeat', addSeat)

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router