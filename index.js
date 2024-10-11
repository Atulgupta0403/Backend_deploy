const express = require("express");
const app = express();


const register = require("./Routes/register")
const login = require("./Routes/login")
const logout = require("./Routes/logout")
const addItem = require("./Routes/item");

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/" , (req,res) => {
    res.send("slash page")
})

app.use("/login",login)
app.use("/register",register)
app.use("/logout",logout)
app.use("/addItem",addItem)


app.listen(3000 , () => {
    console.log("app is listening at port 3000")
})