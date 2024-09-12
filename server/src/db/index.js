const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the Database");
    }
    catch (error) {
        console.log("Error Occured While Connecting to Database: ", error.message);
    }
}
module.exports = connectDB;