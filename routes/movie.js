const {
    getAllMovies,
    movieDetails,
    searchMovieByName,
} = require('../controllers/movie')

const router = require("express").Router()

router.get('/allMovies', getAllMovies)
router.get('/movieDetails', movieDetails)
router.get('/searchMovieByName', searchMovieByName)

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router