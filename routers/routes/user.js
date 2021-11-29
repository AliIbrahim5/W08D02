const express = require("express");
const userRoute = express.Router();

const{resgister,login,}= require("./../controllers/user");

userRoute.post("/resgister",resgister);
userRoute.post("/login",login);

module.exports = userRoute