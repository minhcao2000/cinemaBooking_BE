const Customer = require("../models/customer")


// middleware functions

// verify customer
// login function returns customer info object
module.exports.login = async (req, res, next) => {
    try {
        const { Username, Password } = req.body
        const customer = await Customer.findOne({ Username })
        if (!customer) res.json({ msg: 'Invalid Username!!', status: false })
        if (Password !== customer.Password)
            res.json({
                msg: 'Incorrect Password!!',
                status: false
            })

        res.status(200).json({ status: true, customer})
    } catch (err) {
        next(err)
    }
}

module.exports.userInfo = async (req, res, next) => {
    try {
        // get customer Username from req.customer (see middleware/authen.js)
        const { Username } = req.body
        if (!Username) res.json({
            msg: "Can not get customer Username!",
            status: false
        })
        const customer = await Customer.findOne({ Username })
        if (!customer)
            res.json({
                msg: 'Invalid Username!!',
                status: false
            })

        const { Name, Birthday, Gender, Address, Phone, Email } = customer
        res.status(200).json({
            data: {
                Name,
                Birthday,
                Gender,
                Address,
                Phone,
                Email
            }
        })
    } catch (err) {
        next(err)
    }
}

module.exports.modifyInfo = async (req, res, next) => {
    try {
        // get customer Username from req.customer
        const { Username } = req.customer
        if (!Username) res.json({ msg: "Can not get customer's Username!" })

        const { Name, Birthday, Gender, Address, Phone, Email } = req.body

        if (!Username) res.json({
            msg: "Can not get customer's Username!",
            status: false
        })

        // { filter }, { update }, { set new to 'true' to update }
        const customer = await Customer.findOneAndUpdate(
            { Username },
            { Name, Birthday, Gender, Address, Phone, Email },
            { new: true }
        )

        if (!customer) res.json({
            msg: 'Invalid Username!',
            status: false
        })

        res.status(200).json({ customer, status: true })

    } catch (err) {
        next(err)
    }
}