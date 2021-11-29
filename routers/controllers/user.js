const usermodel = require("../../db/models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt =Number(process.env.SALT);
const secret =process.env.SECRET;

const resgister =async (req, res, next) => {
    const  {email,password,role }
}
