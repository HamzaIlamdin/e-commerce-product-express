const express = require("express");
const connectDB = require("./connect");
const router = require("./routes/user");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
    res.send("APIs Working Successfully");
})



app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})