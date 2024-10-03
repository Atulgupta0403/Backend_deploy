const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../Models/userModel.js")

router.use(cookieParser())

router.get("/", (req, res) => {

    const { username, password, email } = req.body;

    if (username == null) {
        res.send("username bhr de bhaya ")
    }
    else if (email == null) {
        res.send("email bhr de bhaya ")
    }
    else if (password == null) {
        res.send("password bhr de bhaya ")
    }


    else {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                let createUser = await userModel.create({
                    username: username,
                    email: email,
                    password: hash,
                })
            });
        })

        var token = jwt.sign({ email: email }, 'secret');

        res.cookie("token", token)
        res.send("Ho gya register bhai ")
        // res.redirect("/profile");
    }
})

router.get("/cookie", (req, res) => {
    res.send(req.cookies)
})

module.exports = router