
const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    code:String,
    title:String,
    description:String,
    instructorId:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
},{timestamps:true})

const CourseModel = mongoose.model("course", coursesSchema);

module.exports = CourseModel;


// sample payload for course
// {
// Backend101
// Backend - Basics
// Router, Model, Controller, MongoDB
// }

// {
// Backend201
// Backend - Inter
// AuthenticatorAssertionResponse, Authe, Encr, Containt,er 
// }

// {
// Backend301
// Backend - Advance
// LLD, HLD, Cloud Computing
// }