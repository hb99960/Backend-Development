// CRUD

const UserModel = require("../model/user.model");

async function getUserData(req, res){
    let data = await UserModel.find();
    console.log(data);
    res.status(200).json({message:"All user data", users: data});
}

async function createUserData(req, res){
    // await UserModel.insertMany([{
    //     name:"Sagar",
    //     marks: 100,
    //     interest: "Full-stack"
    // }])

    const newUserData = req.body;
    console.log(newUserData);
    let result = await UserModel.insertMany(newUserData);
    console.log("User added");
    res.status(201).json({message: "User Added", user: result});
}

async function updateUserData(req, res){
    const {id} = req.params;
    const newData = req.body;
    // let updatedUser = await UserModel.findByIdAndUpdate("687755e00ef8e4f9ea898446",{name:"Vaibhav"});
    let updatedUser = await UserModel.findByIdAndUpdate(id, newData, {new:true});
    res.status(201).send({message:"User updated", user: updatedUser});
}

// add User Data
// why not PUT, and why Update? 

async function addUserAddress(req, res){
    try{

        const {userId} = req.params;
        const newAddress = req.body;

        const user =  await UserModel.findById(userId);

        if(!user){
            res.status(404).send({message:"User not found"});
        }
            
        user.address.push(newAddress);
        await user.save();
        res.status(200).send({message:"Address Updated", address: newAddress});
    } catch(error){
        console.error("Error adding address");
        res.status(500).send({message:"Error adding address", error: error.message});
    }
    
}

async function updateUserAddress(req, res){

    try{

        const {userId, addressId} = req.params;
        const updatedData = req.body;

        const user = await UserModel.findById(userId);
        if(!user)
            res.status(404).send({message:"User not found"});

        const addressToUpdate = user.address.id(addressId);

        if(!addressToUpdate)
            res.status(404).send({message:"Address does not exist"});

        Object.assign(addressToUpdate, updatedData);
        await user.save();
        res.status(200).send({message:"Address updated", address: updatedData});
    }catch(error){
        console.error("Error updating address", error.message);
        res.status(500).send({message:"Error updating address", error:error.message});
    }
    
}



module.exports = {getUserData, createUserData, updateUserData, addUserAddress, updateUserAddress};

// createUserData();

// getUserData();
// updateUserData();