const express = require("express");
const CRUDRouter = express.Router();

CRUDRouter.get("/getAPI", (req, res)=>{
    console.log("Get Request");
    res.json({message:"Get Request receieved"});
});
// baseURL/learn/postAPI
CRUDRouter.post("/postAPI", (req, res)=>{
    console.log("POST request recieved");
    res.json({message:"POST request received"});
});

CRUDRouter.delete("/deleteAPI", (req, res)=>{
    res.json({message:"Delete request received"});
}
);

module.exports = CRUDRouter;


