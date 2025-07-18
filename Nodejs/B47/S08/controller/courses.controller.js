const CourseModel = require("../model/courses.model");
const UserModel = require("../model/user.model");

const getAllCourses = async (req, res) =>{
    try{
        const courses = await CourseModel.find().populate("instructorId");
        res.status(200).send({message:"All courses", course: courses});
    } catch(err){
        console.log("Error getting courses", err.message);
    }
}

const createNewCourse = async (req, res) =>{

    try{
        console.log(req.body);
        const {code, title, description, instructorId} = req.body;

        const course = await CourseModel.create({code, title, description, instructorId});

        // add course in userDetails

        const instructor = await UserModel.findById(instructorId);
        instructor.courses.push(course._id);
        await instructor.save();

        res.status(200).send({message:"Courses created", course: req.body});
    } catch(err){
        console.log("Error", err.message);
        res.status(500).send({message:"Error creating course", error: err.message})
    }
}

module.exports = {getAllCourses, createNewCourse}