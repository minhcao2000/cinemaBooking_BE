const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const movieSchema = new mongoose.Schema({
    Name: String,
    Director: String,
    Release_date: Date,
    Description: String,
    Age_limit: String,
    Rating: Number,
    Time_limit: String,
    Image: String,
    Cast: [String],
    Format: [String],
    Genre: [String],
    Language: [String]
})

module.exports = mongoose.model("movie", movieSchema, "movie")