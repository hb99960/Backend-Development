const express = require("express");
const AdminRouter = require("./routes/admin.routes");
const ReaderRouter = require("./routes/reader.routes");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use("/health-check", (req, res) =>{
    res.status(200).json({message:"Server is up and running"});
})
app.use("/admin", AdminRouter);
app.use("/readers", ReaderRouter);

app.listen(5200, ()=>{
    console.log(`Server started on localhost 5200`);
});