const mongoose = require("mongoose");
require("dotenv").config();
require('colors');
const DB_URL = process.env.DB_URL;


module.exports = connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};