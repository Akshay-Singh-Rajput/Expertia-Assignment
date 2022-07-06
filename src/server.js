const app = require("./index");
const connectDB = require("./configs/db");
const express = require('express');
const path = require('path');
require("dotenv").config();
const PORT = process.env.PORT || 8080;


//-------------deployment --------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("../../Frontend/dist"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    });
}

//-------------deployment --------------------


app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server running on  ${PORT}.. `.yellow.bold);
    } catch (error) {
        console.log(error.message);
    }
});
