const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const movieShowSchema = new mongoose.Schema({
    Date: Date,
    Time: String,
    Admin_ID: {
        type: ObjectId,
        ref: 'user',
    },
    Movie: {
        type: ObjectId,
        ref: 'movie'
    },
    Room: {
        type: ObjectId,
        ref: 'room' 
    }
})

module.exports = mongoose.model("movie_show", movieShowSchema, "movie_show")