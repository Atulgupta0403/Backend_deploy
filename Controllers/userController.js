const userModel = require("../Models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userRegisteration = (req,res) => {
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
                console.log(createUser)
            });
        })

        var token = jwt.sign({ username: username }, 'secret');

        res.cookie("token", token)
        res.send("Ho gya register bhai ")
        // res.redirect("/profile");
    }
}


module.exports = {userRegisteration}