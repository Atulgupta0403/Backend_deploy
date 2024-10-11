const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser")
const {userRegisteration} = require("../Controllers/userController")


router.use(cookieParser())

router.post("/", userRegisteration)

router.get("/cookie", (req, res) => {
    res.send(req.cookies)
})

module.exports = router