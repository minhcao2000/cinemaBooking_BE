const {
    getAllMovies,
    movieDetails,
    searchMovieByName,
    currentShows,
} = require('../controllers/movie')

const router = require("express").Router()

router.get('/allMovies', getAllMovies)
router.get('/movieDetails', movieDetails)
router.get('/searchMovieByName', searchMovieByName)
router.get('/currentShow', currentShows)

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router