const {
    login,
    signup,
    userInfo,
    modifyInfo,
} = require("../controllers/user")


const router = require("express").Router()

router.post('/login', login)
router.post('/signup', signup)
router.get('/userInfo', userInfo)
router.patch('/modifyInfo', modifyInfo)


// error handler
router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router