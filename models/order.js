const { create } = require('domain')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const orderSchema = new mongoose.Schema({
    Invoice_num: String,
    Pay_time: Date,
    Total_price: Number,
    CustomerId: {
        type: ObjectId,
        ref: 'user'
    },
    VoucherId:  {
        type: ObjectId,
        ref: 'voucher'
    },
})

module.exports = mongoose.model("order", customerSchema, "order")