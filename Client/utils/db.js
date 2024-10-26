// const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/LoginDetails";

// const connectDb = async () => {
//   try {
//     await mongoose.connect(URI,{
//     console.log("connection successful to DB")
//   });
//   } catch (error) {
//     console.error("database connection fail");
//     process.exit(0);
//   }
// };

// module.exports = connectDb;
// const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/LoginDetails"; 

// const connectDb = async () => {
//   try {
//     await mongoose.connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connection successful to DB");
//   } catch (error) {
//     console.error("Database connection failed", error);
//     process.exit(1); 
//   }
// };

// module.exports = connectDb;
const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/LoginDetails";

const connectDb = async () => {
  console.log("Attempting to connect to DB..."); 
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection successful to DB");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

connectDb(); 
module.exports = connectDb;