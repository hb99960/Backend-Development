const { getData, setData } = require("../model/todo.model");
const getAllTodos = (req, res)=>{

    let data = getData().data;
    console.log(data);
    res.json({message:"Request received", response:data});
}

const addNewTodo = (req,res)=>{
    let newTask = req.body;
    console.log(newTask);
    // readFileSync
    let data = getData().data;
   
    // array
    let todos = data.todos;
    // modify array
    // let newId = todos.length + 1;
    let newId = todos[todos.length-1].id + 1;
    todos.push({id:newId, ...req.body});
    // write file
    setData(data);
    res.json({message:"Task Added"});
}

const updateTodo = (req, res)=>{
    // id
    // body
    // read todos
    // array
    // update the array
    // write to file
    
    const todoId = parseInt(req.params.id);
    const updatedTask = req.body;

    let data = getData().data;
    let todos = data.todos;

    const index = todos.findIndex(todo => todo.id === todoId);

    if (index === -1) {
        return res.status(404).json({ message: "Todo not found or invalid ID" });
    }

    // Update the existing task fields
    todos[index] = { ...todos[index], ...updatedTask };

    setData(data);
    res.json({ message: "Todo updated", updated: todos[index] });
    // res.json({message:"Todo updated"})
}

const deleteTodo = (req, res)=>{
    let todoId = req.params.todoId;
    console.log(todoId);

    // business logic
    // readFileSync
    let data = getData().data;
    let todos = data.todos;
    // find if id is there or Notification
    let index = todos.findIndex((todo, index) => todo.id == todoId);
    console.log(index);
    if(index == -1){
        // if not -> res wrong id
        res.json({message:"Wrong Id or Todo no found"});
    }else {   
        // if newFilter
        let filteredData = todos.filter((todo) => todo.id !=todoId);
        // write fs
        data.todos = filteredData;
        setData(data);
    }

    // res.json({message:"Todo Delted", todo:req.params, response: data});
    res.json({message:"Todo Deleted"});
};


module.exports = {getAllTodos, addNewTodo, updateTodo, deleteTodo};