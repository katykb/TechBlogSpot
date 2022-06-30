const sequelize = require("../config/connection");
const { Users } = require("../models");

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

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
