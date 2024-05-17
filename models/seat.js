const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const seatSchema = new mongoose.Schema({
    Row_index: String,
    Col_index: Number,
    Room_number: Number,
    Show_ref: {
        type: ObjectId,
        ref: 'movie_show'
    },
    State: String
})

module.exports = mongoose.model("seat", seatSchema, "seat")
