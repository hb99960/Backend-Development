const express = require("express");
const TodoRouter = express.Router();
const fs = require("fs");
const { getAllTodos, addNewTodo, updateTodo, deleteTodo } = require("../controller/todo.controller");

TodoRouter.get("/all-todos", getAllTodos);
TodoRouter.post("/add-todo", addNewTodo);
TodoRouter.put("/update-todo/:id", updateTodo );
TodoRouter.delete("/delete-todo/:todoId", deleteTodo);

module.exports = TodoRouter;


// Dynamic Routing 
// Path params -> :
// Query Params -> ?


// Todo App = 
// get all tasks

// add task
    // body

// update task
    // id
    // body


// delete task
    // id


// Update resources
// app.put();