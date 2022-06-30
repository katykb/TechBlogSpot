const router = require("express").Router();

router.get("/", async (req, res) => {
res.render('hompage');

})

module.exports= router;