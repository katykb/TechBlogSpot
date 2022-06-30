const router = require('express').Router();

const commentRoutes = require('./commentRoutes')
const userRoutes = require('./user-routes');
const blogPosts = require('./post-routes')

router.use('/users', userRoutes);
router.use('/posts',blogPosts);
router.use('/comments', commentRoutes)



module.exports = router;