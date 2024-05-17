const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const ticketSchema = new mongoose.Schema({
    Seat_IDs: [{
        type: ObjectId,
        ref: 'seat'
    }],
    User_ID: {
        type: ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model("ticket", ticketSchema, "ticket")