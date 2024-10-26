const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken ')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})
// userSchema.pre('save',async function () {
//     const user = this;
//     console.log("actual data ", this);
  
//     if (!user.isModified) {
//       return next();
//     }
  
//     try {
//       const saltRound = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(user.password, saltRound);
//       user.password = hashedPassword;
//     } catch (error) {
//       return next(error);
//     }
    
// })
// userSchema.methods.generateToken = async function (){
//   try {
//     return jwt.sign(
//       {
//         userId: this._id.toString(),
//         email: this.email,
//         isAdmin: this.isAdmin,
//       },
//       process.env.JWT_SECRET_KEY,
//       {
//         expiresIn: "30d",
//       }
//     );
  
// } catch (error) {
//   console.log(error)
// }
// };
const User = mongoose.model('User', userSchema);
export default User;
