const {
    getAllMovies,
    movieDetails,
    searchMovieByName,
    currentMovies,
    showsOfMovie,
    removeMovie,
} = require('../controllers/movie')
const {
    getAllVouchers
} = require('../controllers/voucher')

const router = require("express").Router()

router.get('/allMovies', getAllMovies)
router.get('/movieDetails', movieDetails)
router.get('/searchMovieByName', searchMovieByName)
router.get('/currentMovies', currentMovies)
router.get('/showsOfMovie', showsOfMovie)
router.delete('/removeMovie', removeMovie)

router.get('/getAllVouchers', getAllVouchers)

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router