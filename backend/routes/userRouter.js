const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    try {
        let {
            email,
            phone,
            password,
            passwordCheck,
            displayName
        } = req.body;

        //validate
        if (!email || !phone || !password || !passwordCheck)
            return res.status(400).json({
                msg: "Not all fields have been entered."
            });
        if (password.length < 5)
            return res.status(400).json({
                msg: "The password needs to be at least 5 Characters long."
            })
        if (password !== passwordCheck)
            return res.status(400).json({
                msg: "Enter the same password twice for verification."
            })
        const existingUser = await User.findOne({
            email: email
        })
        if (existingUser)
            return res.status(400).json({
                msg: "An Account with this email already exists."
            });

        if (!displayName) displayName = email;

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            email,
            password: passwordHash,
            phone,
            displayName
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

});

router.post("login", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // validate
        if (!email || !password)
            return res.status(400).json({
                msg: "Not all fields have been entered."
            });
        const user = await User.findOne({
            email: email
        })
        if (!user)
            return res.status(400).json({
                msg: "No account with this email has been registered."
            });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({
                msg: "Invalid email or password credentials."
            });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})
module.exports = router;