const { json } = require("express")
const Order = require("../models/order");
const order = require("../models/order");

module.exports.addOrder = async(req, res, next) => {
    try {
        const { Total_price, CustomerId, VoucherId } = req.body;

        const order = await Order.create({
            Pay_time: new Date(),
            Total_price: Total_price,
            CustomerId: CustomerId,
            VoucherId: VoucherId
        })
        return res.json({
            status: true,
            order
        })

    } catch (err) {
        next(err);
    }
}

module.exports.removeOrder = async(req, res, next) => {
    try {
        const {_id} = req.body;
        
        await Order.deleteOne({ _id: _id})
        return res.json({
            status: true,
            msg: 'record removeded'
        })
    } catch (err) {
        next(err);
    }
}