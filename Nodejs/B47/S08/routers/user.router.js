

// How to create Router??

const express = require("express");
const { getUserData, createUserData, updateUserData, addUserAddress, updateUserAddress } = require("../controller/user.controller");
const userRouter = express.Router();


userRouter.get("/", getUserData)
userRouter.post("/", createUserData)
userRouter.patch("/:id", updateUserData)
userRouter.patch("/:userId/address", addUserAddress)
userRouter.patch("/:userId/address/:addressId", updateUserAddress);

module.exports = userRouter;
