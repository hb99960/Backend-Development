
const mongoose = require("mongoose");

const connectToDB = async () =>{

    try{
        const url = process.env.MONGO_URI;
        console.log("MONGODB URI is ",url);
         await mongoose.connect(url)
        console.log("DB Connection Successfull");
    } catch( error){
        console.error("DB Connection failed : ", error);
    }   

}

module.exports = connectToDB;


