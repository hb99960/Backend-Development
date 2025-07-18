require('dotenv').config();
// mongoose

// 1. Learn about Mongoose without express App
//      communication with MongoDB - Yes
// 2. Created App
//      communication with MongoDB - Yes

// Single File = Single Responsibility


const express = require("express");
const connectToDB = require("./configs/mongo.config");
const userRouter = require("./routers/user.router");
const coursesRouter = require("./routers/courses.router");

connectToDB();

// schema : structure of documents

// users : collection name

const app = express();
app.use(express.json());
app.get("/health", (req, res)=>{
    console.log("Server is up and running");
    res.send({message:"Server is up and running"})
})
app.use("/users", userRouter);
app.use("/courses", coursesRouter);

app.listen(6300, ()=>{
    console.log("Server is running on 6300");
})



