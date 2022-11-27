const express = require("express");
// const connection = require("../connection");
const userRoute = express.Router();

const { createUser, allUsers } = require("../controllers/user.controller");

userRoute.get("/all-users", allUsers);
userRoute.post("/create", createUser);

// userRoute.get("/read", (req, res) => {
//   console.log(req.baseUrl);
//   res.send("<h1>This is user read page </h1>");
// });

module.exports = userRoute;
