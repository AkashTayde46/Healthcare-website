const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
       
    },
    password:{
        type:String,
        require:true,
        minLength:[8],
    }
});
const User = new mongoose.model("Details", userSchema);

module.exports = User;