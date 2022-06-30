const commentSeeds = require("./commentSeeds");
const postSeeds = require("./postSeeds");
const userSeeds = require("./userSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
     await userSeeds();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await postSeeds();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await commentSeeds();
  console.log("\n----- TAGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
