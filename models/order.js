const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

// create customer schema
const orderSchema = new mongoose.Schema({
    Invoice_num: String,
    Pay_time: Date,
    Total_price: Number,
    CustomerId: ObjectId
})

module.exports = mongoose.model("order", customerSchema, "order")