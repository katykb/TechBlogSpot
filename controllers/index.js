const router = require("express").Router();

// const postRoutes = require("./api/post-routes");
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
// const userRoutes = require("./api/user-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("./posts", postRoutes);
// router.use("./login", userRoutes);

module.exports = router;
