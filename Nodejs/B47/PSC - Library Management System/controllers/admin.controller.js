const { getBookData, setBookData, writeLogs } = require('../models/admin.model');

// Get all books
function getAllBooks(req, res) {
    const books = getBookData();
    res.status(200).json(books);
}

// Create a new book
function createBook(req, res) {
    const books = getBookData();
    console.log(books);
    const newBook = req.body;
    console.log(`New Book : ${newBook}`);
    newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
    newBook.status = "available";
    newBook.borrowedBy = "";
    newBook.borrowedDate = "";
    books.push(newBook);
    setBookData(books);
    writeLogs(`Book created: ${newBook.title} (ID: ${newBook.id})`);
    res.status(201).json(newBook);
}

// Update a book by ID
function updateBook(req, res) {
    const books = getBookData();
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    const updatedBook = { ...books[index], ...req.body, id: bookId };
    books[index] = updatedBook;
    setBookData(books);
    writeLogs(`Book updated: ${updatedBook.title} (ID: ${bookId})`);
    res.status(200).json(updatedBook);
}

// Delete a book by ID
function deleteBook(req, res) {
    const books = getBookData();
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    const deletedBook = books.splice(index, 1)[0];
    setBookData(books);
    writeLogs(`Book deleted: ${deletedBook.title} (ID: ${bookId})`);
    res.status(200).json({ message: "Book deleted successfully" });
}

module.exports = { getAllBooks, createBook, updateBook, deleteBook };