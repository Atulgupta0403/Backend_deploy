const express = require("express");
const productModel = require("../Models/productModel");
const isLoggedIn = require("../Middlewares/isLoggedIn");

const router = express.Router();

router.post("/" , isLoggedIn , async (req,res) => {
    let {name , description , category , price , stock , rating } = req.body;

    

    let createdProduct = await productModel.create({
        name : name,
        description : description,
        category : category,
        price : price,
        stock : stock,
        rating : rating
    })

    res.send(createdProduct);

})

module.exports = router;