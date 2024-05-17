const { json } = require("express")
const Seat = require("../models/seat")

module.exports.addSeat = async (req, res, next) => {
    try {
        const { Row_index, Col_index, Room_number, Show_ref, State } = req.body;

        const seat = await Seat.create({
            Row_index, Col_index, Room_number, Show_ref, State
        })
        return res.json({
            status: true,
            seat
        })

    } catch (err) {
        next(err);
    }
}

module.exports.getAllSeats = async (req, res, next) => {
    try {
        const { Show_ref } = req.body;
        const seats = await Seat.find({ Show_ref })

        return res.json({
            status: true,
            seats
        })

    } catch (err) {
        next(err);
    }
}