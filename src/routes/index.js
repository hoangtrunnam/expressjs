const newsRoutes = require('./news')
const siteRoutes = require('./site')
const route = (app) => {
    app.use('/news', newsRoutes)
    app.use('/',siteRoutes)
};

module.exports = route;
