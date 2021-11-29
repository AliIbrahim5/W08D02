const express = require("express");
const userRoute = express.Router();

const{resgister}= require("./../controllers/user");

userRoute.post("/resgister",resgister);

module.exports = userRoute