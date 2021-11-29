// عمل ريكواير للاكسبريس
const express = require("express");
// تسميه يوزر روتر لتعريفة واستخدامه في الاندكس
const userRoute = express.Router();

// امتداد الكنترول يوزر
const { resgister, login } = require("./../controllers/user");

// باث التسجيل
userRoute.post("/resgister", resgister);
// باث الدخول
userRoute.post("/login", login);
// عمل اكسبورت لليوزر روتر
module.exports = userRoute;
