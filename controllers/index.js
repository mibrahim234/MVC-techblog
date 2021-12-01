// routes that are used to display info to the user 
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
 const postRoutes = require('./selectedPost');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
