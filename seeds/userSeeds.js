const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "katybr35",
    password: "password",
  },
  {
    username: "ebrown",
    password: "password",
  },
  {
    username: "hbrown",
    password: "password",
  },
  {
    username: "abrown",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
