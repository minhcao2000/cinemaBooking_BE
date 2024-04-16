const { create } = require('domain')
const mongoose = require('mongoose')

const voucherSchema = new mongoose.Schema({
    S_time: Date,
    E_time: Date,
    Gender: String,
    Order_price: Number,
    Total_point: Number,
    Description: String,
    Discount_percent: Number
})

module.exports = mongoose.model("voucher", voucherSchema, "voucher")