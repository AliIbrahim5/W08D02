
//خطوات بناء السيرفر
//1-عمل ريكواير للاكسبريس ودونت انف
const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");


// تعريف appللاكسبرس
const app = express()
// تعريف donenv في الاندكس
dotenv.config()
// ريكواير من الدي بي الى الاندكس
const db = require("./db/index");
app.use(express.json());
// استدعاء من مجلد الروترز ومن ثم مجلد الروتز
const roleRouter =require("./routers/routes/role");
const userRoute = require("./routers/routes/user");

// لتشغيله في مجلد الاندكس
app.use(roleRouter);
app.use(userRoute);
// استدعاء البورت من .env عن طيق process.env.PORT
const PORT = process.env.PORT||5000;
app.use(cors())

// app.lidten تتأكد من تشغيل السيرفر في حال اذا كان شغال او لا
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });