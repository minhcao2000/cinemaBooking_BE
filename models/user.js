const { create } = require('domain')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    Name: String,
    Birthday: Date,
    Gender: String,
    Address: String,
    Phone: String,
    Email: {
        type: String,
        require: true,
    },
    Created_time: Date,
    Total_point: Number,
    Certificate: String,
    isAdmin: Boolean
})

module.exports = mongoose.model("user", userSchema, "user")