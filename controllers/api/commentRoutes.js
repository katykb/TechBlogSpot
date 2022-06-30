const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Posts, Comments } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Posts.findAll({
      include: [
        {
          model: User,
        },
        res.json(blogData),
      ],
    });
  } catch (err) {
    res.status(500).json(err);
  }
  console.log("this route is working");
});

router.get("/posts", async (req, res) => {
  console.log("Blogs GET");
  if (req.session.logged_in) {
    console.log(req.session);
    res.render("blogPosts", {
      logged_in: true,
      username: req.session.username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/users", async (req, res) => {
  const db_users = await User.findAll({});

  const users = db_users.map((user) => user.get({ plain: true }));

  console.log(users);

  res.render("users", { users });
});
module.exports = router;
