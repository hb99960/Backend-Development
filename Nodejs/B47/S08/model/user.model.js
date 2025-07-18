const mongoose = require("mongoose");

// const coursesSchema = new mongoose.Schema({
//     code:String,
//     title:String,
//     description:String
// })

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    marks:{type:Number, required:true, min:0, max:100},
    email:{type:String, required:true},
    address:[{
        houseNumber:String,
        area:String,
        landMark: String
    }],
    skills:[
        {
            tech:String,
            level:String
        }
    ],
    interest:{type:String, required:true, enum:["fullstack", "frontend", "backend"], default:"fullstack"},
    courses: [{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
    role: {
        type:String,
        enum: ["student", "instructor"],
        default: "student"
    }   
},{versionKey:false});

// model = user
const UserModel = new mongoose.model("user", userSchema);

module.exports = UserModel;

// Why UserModel and Why not Schema?
// schema
// Nested schema, Embedded schema, Referenced Documents