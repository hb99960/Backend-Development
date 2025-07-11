const fs = require("fs");
const express = require("express");
const getAPI = require("./routes/learn.crud.routes");
const CRUDRouter = require("./routes/learn.crud.routes");
const TodoRouter = require("./routes/todo.crud.routes");
const app = express(); // returns object

// app-> listen, use
// app-> get, post, delete, put

app.use((req, res, next) => {
    console.log("Middleware - 1");
    next();
})

app.use((req, res, next) => {
    console.log("Middleware - 2");
    next();
})

app.use(express.json())
// Base url
app.get("/", (req, res)=>{
    res.json({message:"Welcome to home page"});
});

app.use((req, res, next) => {
    console.log("Middleware - 3");
    next();
})

app.get("/health", (req, res)=>{
    console.log("Server is up and running!!!");
    res.json({message:"Server is healthy, up and running"});
});

app.use((req, res, next) => {
    console.log("Middleware - 4");
    next();
})

// Total = 7

// CRUD endpoints / route
// Read resources
// Base URL + endpoint
//localhost:5176/postAPI
// Add resources
// Delete resources

// Middleware
    // 1. Route towards another middleware
    // 2. Route towards endpoint
app.use("/learn",CRUDRouter);

app.use((req, res, next) => {
    console.log("Middleware - 5");
    next();
})
app.use("/todo", TodoRouter);


const PORT = 5176;
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})

// MVC
// Model : DB (Data layer)
// View : UI (Presentation layer)
// Controller : Routes -> Busines logic (Application)

// Refactoring : Changes the code




