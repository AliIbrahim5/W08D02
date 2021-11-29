// عمل اكسبورت للاكسبريس بداخل الروتز رول
const express = require("express");
// تعريف ثابت رول راوتر لاستخدامها في القيت والبوست
const roleRouter = express.Router();
// استدعاء مابداخل الكنترول  من انشاء وعرض
const { newrolr, getrole } = require("../controllers/role");
// الباثات التي تستخدمها في البسوت مان للعرض والانشاء
roleRouter.post("/role", newrolr);
roleRouter.get("/read", getrole);
// عمل اكسبورت roleRouter
module.exports = roleRouter;
