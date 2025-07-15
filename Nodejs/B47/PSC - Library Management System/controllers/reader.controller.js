const { getBookData, setBookData, writeLogs } = require('../models/admin.model');

// Get all available books
function getAvailableBooks(req, res) {
    const books = getBookData();
    const availableBooks = books.filter(book => book.status === "available");
    res.status(200).json(availableBooks);
}

// Borrow a book
function borrowBook(req, res) {
    const books = getBookData();
    const bookId = parseInt(req.params.id);
    const { readerName } = req.body;
    const index = books.findIndex(book => book.id === bookId);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    if (books[index].status === "borrowed") {
        return res.status(400).json({ message: "Book already borrowed" });
    }

    books[index].status = "borrowed";
    books[index].borrowedBy = readerName;
    books[index].borrowedDate = new Date().toISOString().split('T')[0];
    setBookData(books);
    writeLogs(`Book borrowed: ${books[index].title} (ID: ${bookId}) by ${readerName}`);
    res.status(200).json({ message: "Book borrowed successfully", book: books[index] });
}

// Return a book
function returnBook(req, res) {
    const books = getBookData();
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    if (books[index].status === "available") {
        return res.status(400).json({ message: "Book is not borrowed" });
    }

    books[index].status = "available";
    books[index].borrowedBy = "";
    books[index].borrowedDate = "";
    setBookData(books);
    writeLogs(`Book returned: ${books[index].title} (ID: ${bookId})`);
    res.status(200).json({ message: "Book returned successfully", book: books[index] });
}

module.exports = { getAvailableBooks, borrowBook, returnBook };