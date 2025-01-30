const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`MongoDB Connected Successfully wiht host ${mongoose.connection.host}`)
    }).catch((err) => {
        console.log("Database Error", err);
    })
}
module.exports = connectDB;