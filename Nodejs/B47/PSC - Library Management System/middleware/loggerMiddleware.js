const fs = require('fs');


const logPath = './logs.txt';

function loggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    const logMessage = `[${timestamp}] ${req.method} ${req.originalUrl}\n`;
    fs.appendFileSync(logPath, logMessage, 'utf-8');
    next();
}

module.exports = loggerMiddleware;