const newsRoutes = require('./news')
const siteRoutes = require('./site')
const coursesRoutes = require('./courses')

const route = (app) => {
    app.use('/news', newsRoutes)
    app.use('/courses', coursesRoutes)
    app.use('/',siteRoutes)
};

module.exports = route;
