const express = require("express");
const { getAllCourses, createNewCourse } = require("../controller/courses.controller");
const coursesRouter = express.Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.post("/", createNewCourse);

module.exports = coursesRouter;