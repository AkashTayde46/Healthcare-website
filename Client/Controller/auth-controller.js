const User = require('../Models/user-model') 
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log(error);
    }
  };
  // const register = async (req, res) => {
  //   try {
  //   const { name, password} = req.body;
  //   const userExist = await User.findOne({email:email});
  //  if(userExist){
  //   return res.status(400).json({msg:"email already exists"})
  //  }
  //  await User.create({name, password})
  //    const data = req.body;
  //     // console.log(req.body);
  //     // res.status(201).json({ message: "User registered successfully" });
  //     res.status(200).json({ msg: data });
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // };
  // const register = async (req, res) => {
  //   try {
  //     const { name, email, password } = req.body; 
  
  //     // Check if a user with the given email already exists
  //     const userExist = await User.findOne({ email });
  //     if (userExist) {
  //       return res.status(400).json({ msg: "Email already exists" });
  //     }
  
  //     // Create a new user
  //     await User.create({ name, email, password });
  
  //     // Respond with success message
  //     res.status(201).json({ user: {
  //       name: newUser.name,
  //       email: newUser.email,
  //       password: newUser.password // Be cautious about including the password in responses
  //     }});
  //   } catch (error) {
  //     // Handle server errors
  //     res.status(500).json({ message: "Internal server error", error: error.message });
  //   }
  // };
  
  
  // module.exports = { home, register };
  const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if a user with the given email already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        
        // Create a new user
        const newUser = await User.create({ name, email, password });

        // Respond with success message, but exclude the password from the response
        res.status(201).json({
    
            user: {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password
                // Omit the password field
            }
        });
        
    } catch (error) {
        // Handle server errors
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    // const isMatch = await userExist.compare(password);
    const isMatch = await User.findOne({ password });
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // const token = userExist.generateToken();  // Generate the token

    res.status(200).json({
      message: "Login Successful",
      // token,
      // userId: userExist._id.toString(),
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Server Error" });
  }
};


module.exports = { home,register,login };
