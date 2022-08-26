const express = require("express");
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const app = express();
const port = 3000;
const path = require('path')
const route = require('./routes/index')
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use(express.json())

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resource', 'views'));

route(app) // init route for app

app.listen(port, () => {
    console.log(`listening port ${port}`);
});
