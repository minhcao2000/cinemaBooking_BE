const User = require("../models/user")
// middleware functions

// http://localhost:8000/auth/login/
module.exports.login = async (req, res, next) => {
    try {
        const { Username, Password } = req.body
        const user = await User.findOne({ Username })
        if (!user) res.json({ msg: 'Invalid Username!!', status: false })
        if (Password !== user.Password)
            res.json({
                msg: 'Incorrect Password!!',
                status: false
            })

        res.status(200).json({ status: true, user})
    } catch (err) {
        next(err)
    }
}

// http://localhost:8000/auth/signup/
module.exports.signup = async(req, res, next) => {
    try {
        const { Name, Username, Password, Phone, Email, Address, Birthday, Gender } = req.body
        const userExisted = await User.findOne({Username})
        const emailExisted = await User.findOne({Email})
        if (userExisted) {
            return res.json({
                msg: 'Username already existed',
                status: false
            })
        }

        if (emailExisted) {
            return res.json({
                msg: 'Email already existed',
                status: false
            })
        }

        const user = await User.create({
            Name,
            Username,
            Password,
            Phone,
            Email,
            Address,
            Birthday,
            Gender,
            isAdmin: false,
            Total_point: 0,
            Created_time: new Date(),
        })

        return res.json({
            status: true, user
        })
    } catch (err) {
        next(err)
    }
}

// http://localhost:8000/auth/userInfo/:username
module.exports.userInfo = async (req, res, next) => {
    try {
        // get user Username from req.user (see middleware/authen.js)
        const { username } = req.params
        if (!username) res.json({
            msg: "Can not get user username!",
            status: false
        })
        const user = await User.findOne({ Username: username })
        if (!user)
            res.json({
                msg: 'Invalid Username!!',
                status: false
            })

        const { Name, Birthday, Gender, Address, Phone, Email } = user
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
        // get user Username from req.user
        const { username } = req.params
        if (!username) res.json({
            msg: "Can not get user's username!",
            status: false
        })

        const { Name, Birthday, Gender, Address, Phone, Email } = req.body

        // { filter }, { update }, { set new to 'true' to update }
        const user = await User.findOneAndUpdate(
            { Username: username },
            { Name, Birthday, Gender, Address, Phone, Email },
            { new: true }
        )

        if (!user) res.json({
            msg: 'Invalid Username!',
            status: false
        })

        res.status(200).json({ user, status: true })

    } catch (err) {
        next(err)
    }
}