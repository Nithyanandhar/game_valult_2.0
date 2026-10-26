import { Schema , model } from "mongoose";

const User = new Schema({
    username : {
        type : String,
        unique : true,
        minlength : 4,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
    },
    googleId : {
        type : String
    },
    age : {
        type : Number
    },
    watchList : {
        type : [String]
    }
})


export default model("User",User);