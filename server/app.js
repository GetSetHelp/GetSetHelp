require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
cors = require("cors");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, async (err) => {
  if (err) throw err;
  console.log("Conncted to MongoDB!");
});

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(
  express.json({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use("/routes/user", require("./routes/users"));

const port = 4000;

app.listen(port, () => console.log("Server started on Port: 4000"));
