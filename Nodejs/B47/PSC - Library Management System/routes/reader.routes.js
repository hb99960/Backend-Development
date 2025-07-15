const express = require("express");
const { getAvailableBooks, borrowBook, returnBook } = require("../controllers/reader.controller");
const returnCheckMiddleware = require("../middleware/return.logger");
const ReaderRouter = express.Router();


// transactionLogger
// return logger
ReaderRouter.get("/", getAvailableBooks);
ReaderRouter.post("/borrow/:id", borrowBook);
ReaderRouter.post("/return/:id", returnCheckMiddleware,returnBook);

module.exports = ReaderRouter;