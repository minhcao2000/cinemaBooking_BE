const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const seatSchema = new mongoose.Schema({
    Row_index: String,
    Col_index: Number,
    Room_number:  {
        type: ObjectId,
        ref: 'room'
    },
})

module.exports = mongoose.model("seat", customerSchema, "seat")
