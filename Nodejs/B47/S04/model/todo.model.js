const fs = require("fs");
function getData(){
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const todos = data.todos;
    return {data, todos};
}

function setData(data){
    fs.writeFileSync("./db.json", JSON.stringify(data));
}

module.exports = {getData, setData};