const jwt = require("jsonwebtoken")

isLoggedIn = (req, res, next) => {
    try {
        let data = jwt.verify(req.cookies.token, "secret");
        if (data === null) {
            res.send("Empty cookie");
        } else {
            // req.user = { data }; // Uncomment this line if needed
            console.log(data);
            next();
        }
    } catch (error) {
        console.error("Error verifying token:", error.message);
        res.status(401).send("Unauthorized" );
    }
};

module.exports =  isLoggedIn;

