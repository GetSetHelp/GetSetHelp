var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const UserCredential = require("../models/UserCredential.model.js");

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const checkUser = await UserCredential.findOne({
      // check if user already exist
      email: req.body.email,
    });
    if (checkUser) {
      res.send("User already exist!");
    } else {
      const newUser = new UserCredential();
      newUser.firstname = req.body.firstName;
      newUser.lastname = req.body.lastName;
      newUser.email = req.body.email;
      let newUserModel = new UserCredential(newUser);
      await newUserModel.save();
      res.json("New User Successfully Added!");
    }
  } catch {
    res.status(500).send("Oops! Something went wrong.");
  }
});

module.exports = router;
