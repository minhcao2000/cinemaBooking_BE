const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connect Successfully");
    } catch (err) {
        console.log('connection error', err)
    }
}

module.exports = { connect }