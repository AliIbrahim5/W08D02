// ريكواير لمجلد ارول في الموديولز
const rolemodel = require("../../db/models/role");
// عمل نيو موديول لاخذها من البوست مان عن طريق البدي
const newrolr = (req, res) => {
  const { role, permossion } = req.body;

  const newrolr = new rolemodel({
    role,
    permossion,
  });
  newrolr
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(err);
    });
};
// newrolrاظهار النتائج التي تم تسجيلها في
const getrole = (req, res) => {
  rolemodel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
// عمل اكسبورت لارسالها الى الروتز
module.exports = { newrolr, getrole };
