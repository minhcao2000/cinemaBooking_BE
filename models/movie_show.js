const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const movieShowSchema = new mongoose.Schema({
    Date: Date,
    Time: String,
    Admin_ID: ObjectId,
    movie: {
        type: ObjectId,
        ref: 'movie'
    },
    room: {
        type: ObjectId,
        ref: 'room' 
    }
})

module.exports = mongoose.model("movieShow", customerSchema, "movieShow")