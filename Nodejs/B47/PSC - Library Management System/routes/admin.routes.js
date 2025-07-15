const express = require("express");
const { getAllBooks, createBook, updateBook, deleteBook } = require("../controllers/admin.controller");
const AdminRouter = express.Router();

AdminRouter.get("/books", getAllBooks);
AdminRouter.post("/books", createBook);
AdminRouter.put("/books/:id", updateBook);
AdminRouter.delete("/books/:id", deleteBook);

module.exports = AdminRouter;