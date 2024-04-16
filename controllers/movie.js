const Movie = require("../models/movie")

module.exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find({})

        res.status(200).json({movies})
    } catch (err) {
        next(err)
    }
}

module.exports.movieDetails = async (req, res, next) => {
    try {
        const { _id } = req.body
        const movie = await Movie.findById(_id)

        if (movie) {
            res.status(200).json({
                movie
            })
        } else {
            res.json({
                status: false,
                msg: "invalid movie id"
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports.searchMovieByName = async (req, res, next) => {
    try {
        const { Name } = req.body

        const movies = await Movie.find({ "Name": {"$regex": Name, "$options": "i"} })

        if (!movies) {
            res.json({
                status: true,
                msg: "Can not find the movie"
            })
        } else {
            res.status(200).json({
                movies
            })
        }
    } catch (err) {
        next(err)
    }
}


