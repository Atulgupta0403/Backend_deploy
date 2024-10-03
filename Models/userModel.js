const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/E_commerce`)

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,

    }, 

    password : {
        type : String,
        required : true,
        // required : [true , "Please Enter A Valid Password "],
        // minlength : [6 , "Minimum length of password is 6 char."],
    },

    // register_date : {
    //     type : Date,
    //     default : Date.now,

    // },

    isAdmin : {
        type : Boolean,
        defalut : false
    },

    // orders : [
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : 'product'
    //     }
    // ]

})

module.exports = mongoose.model("user",userSchema);