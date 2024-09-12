require('dotenv').config()
const express = require("express");
const app = express();




app.listen(port, () => {
    console.log("App is running on ", "http:localhost");
})