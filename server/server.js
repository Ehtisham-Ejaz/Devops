const express = require("express");
const mongoose = require('mongoose');
const  userRouter  = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
const cors = require('cors');

const app = express();
const uri = "mongodb+srv://Ehtisham_Mern:ehtisham123@cluster0.n3fsc.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());

app.set("view engine","ejs");
app.use(express.json());
mongoose.set('strictQuery', true)
mongoose.connect(uri,function(err,db){
    if (err) throw err;
    console.log("DataBase Connected")
  });

app.use("/api/users",userRouter);
app.use("/api/blogs",blogRouter);

app.use("/api",(req,res,next) =>{
    res.send("hello")
})

//define port

app.listen(5000, () => console.log("app started at 5000..."));