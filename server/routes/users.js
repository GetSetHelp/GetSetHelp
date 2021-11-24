var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const verifyUser = require("../middlewares/verifyUser.js");
const UserCredential = require("../models/UserCredential.model.js");

router.post("/login", verifyUser, async (req, res) => {
  var user;
  try {
    user = await UserCredential.findOne({
      // check if user already exist
      userId: req.payload["sub"],
    });
  } catch (err) {
    console.log(err);
    res.status(401).send("Not registered!");
  }

  if (user) {
    res.status(200).json("LoggedIn!");
    return;
  }
  else {
    user = new UserCredential();
    user.userId = req.payload["sub"];
    user.firstname = req.payload["given_name"];
    user.lastname = req.payload["family_name"];
    if (req.payload["email_verified"]) {
      user.email = req.payload["email"];
    }
    else {
      res.status(400).json("Email is not verified!");
      return;
    }
    user.save()
      .then(() => res.status(200).json('User successfully Signed up!'))
      .catch(err => res.status(400).json('Error: '+ err));
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
