const Movie = require("../models/movie")
const MovieShow = require("../models/movie_show")

module.exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find({})

        res.status(200).json({movies, status: true})
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
                movie,
                status: true
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
                status: true,
                movies
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports.currentShows = async (req, res, next) => {
    try {
        const shows = await MovieShow.find({}).distinct("Movie")
        let movies = []
        
        for (i = 0; i < shows.length; i++) {
            let movie = await Movie.findById(shows[i])
            movies.push(movie)
        }

        res.json({
            status: true,
            shows,
            movies,
        })

    } catch(err) {
        next(err)
    }
}



