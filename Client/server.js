 require("dotenv").config();
 const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./Router/auth-router");
const corsOption = {
origin:"http://localhost:5173",
method:"GET, POST, PUT, DELETE, PATCH,HEAD",
credential:true,
}
app.use(express.json())
const connectDb = require("./utils/db");
app.use(cors(corsOption))
app.use("/api/auth", router);

const PORT = 5000;
app.get("/", (req, res) => {
res.send("Welcome")
})
connectDb().then(()=>{
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
});