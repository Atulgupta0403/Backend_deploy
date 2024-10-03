const express = require("express")

const router = express.Router()

router.get("/" , (req,res) => {
    res.cookie("token" , "");
    res.send("cookie deleted");
    // res.redirect("/login")
})

module.exports = router