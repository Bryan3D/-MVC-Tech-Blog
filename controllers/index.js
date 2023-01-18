const route = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = reqire('./homeRoutes.js');

route.use('/', homeRoutes);
route.use('/api', apiRoutes);

module.exports = route;