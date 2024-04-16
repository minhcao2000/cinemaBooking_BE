const Voucher = require("../models/voucher")

module.exports.getAllVouchers = async (req, res, next) => {
    try {
        const voucher = await Voucher.find({})

        res.status(200).json({voucher, status: true})
    } catch (err) {
        next(err)
    }
}

module.exports.getVoucherBy_ = async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
}