// const express = require('express')
// const router = express.Router();
// require('../Client/mongo')
// const User = require('../model')
// router.get('/', (req,res) =>{
//     res.send('Hello World');
// })   
// router.post('/AppointmentSignup', (req, res)=>{
//     console.log(req.body.username);
//     res.send("Saved database");

//     if(!username || !password){
//         return res.status(422).json({error: "Please fill all fields"});
//     }
//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({ error:"Email already exist"})
            
//         }
//         const user = new User({username:username, password:password});

//         user.save().then(()=>{
//             res.status(201).json({message: "User registered successfully"});
//         }).catch(err) => res.status(500).json({ message: "User registered SuccessFully"})
//     })
// })
// module.exports = router;

const express = require("express");
const router = express.Router();
const authControllers = require("../Controller/auth-controller");

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);


module.exports = router;