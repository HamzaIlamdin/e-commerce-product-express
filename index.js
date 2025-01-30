const express = require("express");
const connectDB = require("./connect");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

connectDB();
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})