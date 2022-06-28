const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    if (req.session.logged_in) res.render("homepage");
    //else res.render("");
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/homepage", (req, res) => {
//   console.log("Homepage GET");
//   if (req.session.logged_in) {
//     console.log(req.session);
//     res.render("homepage", {
//       logged_in: true,
//       username: req.session.username,
//     });
//   } else {
//     res.redirect("/");
//   }
// });

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
//});

module.exports = router;
