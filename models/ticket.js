const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const ticketSchema = new mongoose.Schema({
    S_time: Date,
    E_time: Date,
    Gender: String,
    Order_price: Number,
    Total_point: Number,
    Description: String,
    Discount_percent: Number,
    Show_ID:  {
        type: ObjectId,
        ref: 'movie_show'
    },
})

module.exports = mongoose.model("ticket", customerSchema, "ticket")