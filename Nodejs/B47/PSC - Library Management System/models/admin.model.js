const fs = require('fs');

const dbPath = "./db.json";
const logPath = "./logs.txt";

function getBookData() {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    return data.books;
}

function setBookData(books) {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    data.books = books;
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 4), 'utf-8');
}

function writeLogs(logMessage) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logPath, `[${timestamp}] ${logMessage}\n`, 'utf-8');
}

module.exports = { getBookData, setBookData, writeLogs };

