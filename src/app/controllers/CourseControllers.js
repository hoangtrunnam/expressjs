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

  // [get] /courses/create
  create(req, res, next) {
    res.render('course/create')
  }
  // [post] /courses/store
  store(req, res, next) {
    // console.log('data la:', req);
    // res.json(req.body);
    const body = req.body;
    body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRI0rU4fuwyYW62bGslWrXAHDNUQ`
    const course = new Course(body)
    course.save()
      .then(() => {
        res.redirect('/')
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

module.exports = new CourseControllers