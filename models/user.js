const { create } = require('domain')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Username: String,
    Password: String,
    Name: String,
    Birthday: Date,
    Gender: String,
    Address: String,
    Phone: String,
    Email: String,
    Created_time: Date,
    Total_point: Number,
    Certificate: String,
    isAdmin: Boolean
})

module.exports = mongoose.model("user", userSchema, "user")