var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user.model.js");

router.post("/login", async (req, res) => {
  try {
    const checkUser = await User.findOne({
      // check if user already exist
      email: req.body.email,
    });
    if (checkUser) {
      res.send("User already exist!");
    } else {
      const newUser = new User();
      newUser.userId = req.body.gId;
      newUser.firstname = req.body.firstName;
      newUser.lastname = req.body.lastName;
      newUser.email = req.body.email;
      let newUserModel = new User(newUser);
      await newUserModel.save();
      res.json("New User Successfully Added!");
    }
  } catch {
    res.status(500).send("Oops! Something went wrong.");
  }
});
router.post("/signUpForm", async (req, res, err) => {
  try {
    const newUser = new User();
    if (req.body.isMentor[0] == "Yes") newUser.isMentor = true;
    newUser.userId = "1";
    newUser.firstname = "H";
    newUser.lastname = "Y";
    newUser.email = "hariomm2504@gmail.com";
    newUser.interests = req.body.interests;
    newUser.expertise = req.body.expertise;
    let newUserModel = new User(newUser);
    await newUserModel.save();
    res.json("New User Successfully Added!");
  } catch (err) {
    // console.log(err);
    res.status(500).send("Oops! Something went wrong.");
  }
});
module.exports = router;
