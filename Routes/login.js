const express = require("express");
const router = express.Router();
const userModel = require("../Models/userModel")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


router.use(cookieParser())

router.get("/", async (req, res) => {
    let { username , password } = req.body;

    // Find the user once and store the result
    const user = await userModel.findOne({ username : username });

    // Check if the user exists
    if (user === null) {
        console.log("User not found");
        return res.status(400).send("User not found");
    } else {
        // If user exists, compare the password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            // If password matches, generate the token and redirect
            let token = jwt.sign({ email: user.email }, "secret");
            res.cookie("token", token);
            // return res.redirect("/profile");
            return res.send("correct password h bhai ab jao /logout pe ")
        } else {
            console.log("Password incorrect");
            return res.status(400).send("Password incorrect");
        }
    }
});



module.exports = router;