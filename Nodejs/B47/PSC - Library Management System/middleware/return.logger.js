const { getBookData } = require('../models/admin.model');

function returnCheckMiddleware(req, res, next) {
    const bookId = parseInt(req.params.id);
    const books = getBookData();
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    if (book.status === "available") {
        return res.status(400).json({ error: "Book is not borrowed" });
    }

    const borrowedDate = new Date(book.borrowedDate);
    const today = new Date();
    const diffDays = Math.floor((today - borrowedDate) / (1000 * 60 * 60 * 24));

    if (diffDays < 3) {
        return res.status(400).json({ error: "Book cannot be returned within 3 days of borrowing." });
    }

    next();
}

module.exports = returnCheckMiddleware;