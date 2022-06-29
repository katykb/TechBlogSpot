const Comments = require("./Comments");
const Posts = require("./Posts");
const Users = require("./User");

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

Comments.belongsTo(Posts, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Posts.belongsTo(Users, {
  foreignKey: "user_id",
});

Posts.hasMany(Comments, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Users.hasMany(Posts, {
  foreignKey: "user_id",
});

Users.hasMany(Comments, {
  foreignKey: "user_id",
});

module.exports = {
  Comments,
  Posts,
  Users,
};
