const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

router.get("/", (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
});
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      res.status(400).json(err);
    });
});
router.post("/add", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const type = req.body.type;
  const encrypt = null;

  bcrypt.hash(password, 12).then(password => {
    const newUser = new User({
      username,
      password,
      type
    });
    newUser
      .save()
      .then(() => res.json("User added"))
      .catch(err => res.status(400).json(err));
  });
});

router.put("/update/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.password = bcrypt(req.body.password);
      user.type = req.body.type;

      user
        .save()
        .then(() => res.json("User info is updated"))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});
router.delete("/delete/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User info Deleted"))
    .catch(err => res.status(400).json(err));
});
// //For User Login
// rou

module.exports = router;
