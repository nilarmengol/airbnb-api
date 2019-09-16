const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  console.log("req.body", req.body);

  req.body.password = bcrypt.hashSync(req.body.password, 10);

  User.create(req.body)
    .then(user => {
      let obj = user.toObject();
      let token = jwt.sign(obj, process.env.VARIABLE_NAME);

      res.send(token);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
