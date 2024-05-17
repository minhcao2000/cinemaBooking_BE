const {
    getAllTickets,
    addTicket
} = require("../controllers/ticket")

const router = require("express").Router()

router.get('/allTickets', getAllTickets)
router.post('/addTicket', addTicket)

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router