const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class CourseControllers {
  // [get] /courses/:slug
show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
    .then(course => {
        res.render('course/show', {course: mongooseToObject(course)});
    })
    .catch(next)

    // res.send(`course detail ${req.params.slug}`);
  }

}

module.exports = new CourseControllers