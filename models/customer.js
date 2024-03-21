const { create } = require('domain')
const mongoose = require('mongoose')

// create customer schema
const customerSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model("customer", customerSchema, "customer")