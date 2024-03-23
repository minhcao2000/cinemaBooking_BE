const { create } = require('domain')
const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    Number: Number,
    State: String,
})

module.exports = mongoose.model("room", customerSchema, "room")