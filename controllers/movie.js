const { json } = require("express")
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

module.exports.currentMovies = async (req, res, next) => {
    try {
        const movieIds = await MovieShow.find({}).distinct("Movie")
        let movies = []
        let movie = {}

        for (i = 0; i < movieIds.length; i++) {
            movie = await Movie.findById(movieIds[i])
            let shows = await MovieShow.find({Movie: movieIds[i]}, 'Date Time Room_number')
            movies.push(movie)
        }

        res.json({
            status: true,
            movieIds,
            movies,
        })

    } catch(err) {
        next(err)
    }
}

module.exports.showsOfMovie = async (req, res, next) => {
    try {
        const {movieId} = req.body
        const shows = await MovieShow.find({Movie: movieId}, 'Date Time Room_number')

        if (shows.length > 0) {
            res.json({
                status: true,
                shows
            })
        } else {
            res.json({
                status: false,
                msg: 'The movie is not currently on showtime'
            })
        }
    } catch(err) {
        next(err)
    }
}

module.exports.removeMovie = async (req, res, next) => {
    try {
        const {_id} = req.body
        await Movie.deleteOne({ _id: _id})

        res.json({
            status: true,
            msg: "Movie removed successfully"
        })
        
    } catch(err) {
        next(err)
    }
}




