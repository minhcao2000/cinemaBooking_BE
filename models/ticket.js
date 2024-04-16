const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const ticketSchema = new mongoose.Schema({
    Seat_ID: {
        type: ObjectId,
        ref: 'seat'
    },
    Show_ID:  {
        type: ObjectId,
        ref: 'movie_show'
    },
})

module.exports = mongoose.model("ticket", ticketSchema, "ticket")