const usermodel = require("../../db/models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt =Number(process.env.SALT);
const secret =process.env.SECRET;

const resgister =async (req, res, next) => {
    const  {email,password,role } = req.body;
    
  const savedEmail = email.toLowerCase();
  const savedPassword = await bcrypt.hash(password, salt);

  const newuser = new usermodel({
    email: savedEmail,
    password: savedPassword,
    role,
  });
  newuser
    .save()
    .then((result) => {
       
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });

}

module.exports ={resgister}
