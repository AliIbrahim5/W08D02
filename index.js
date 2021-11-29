
//خطوات بناء السيرفر
//1-عمل ريكواير للاكسبريس ودونت انف
const express = require("express");

const dotenv = require("dotenv");

// تعريف appللاكسبرس
const app = express()
// تعريف donenv في الاندكس
dotenv.config()
// استدعاء البورت من .env عن طيق process.env.PORT
const PORT = process.env.PORT||5000;

// app.lidten تتأكد من تشغيل السيرفر في حال اذا كان شغال او لا
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });