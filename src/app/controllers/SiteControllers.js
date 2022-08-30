const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteControllers {
    // [get] /home
  index(req, res, next) {
    
    Course.find({})
      .then(courses => {
        // courses = courses.map(course => course.toObject())
        res.render("home",{courses: multipleMongooseToObject(courses) })
      })
      .catch(next)
  }
  // [get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers