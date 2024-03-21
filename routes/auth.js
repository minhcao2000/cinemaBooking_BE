const {
    login,
    userInfo,
    modifyInfo,
} = require("../controllers/customer")


const router = require("express").Router()

router.post('/login', login)
router.get('/userInfo', userInfo)
router.patch('/modifyInfo', modifyInfo)


// error handler
router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router