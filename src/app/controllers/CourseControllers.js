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
  }

  // [get] /courses/create
  create(req, res, next) {
    res.render('course/create')
  }

  // [post] /courses/store
  store(req, res, next) {
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

    // [get] /courses/:id/edit
    edit(req, res, next) {
      Course.findById(req.params.id)
        .then(courseById => {
          res.render('course/edit', {course: mongooseToObject(courseById)})
        })
        .catch(next)
    }

    // [put] /courses/:id
    update(req, res, next) {
      Course.updateOne({_id: req.params.id}, req.body)
        .then(() => {
          res.redirect('/me/stored/courses')
        })
        .catch(next)
    }
    // [delete] /courses/:id
    destroy(req, res, next) {
      Course.delete({_id: req.params.id}, req.body)
        .then(() => {
          res.redirect('back') // chuyển lại chính trang đó
        })
        .catch(next)
    }
}

module.exports = new CourseControllers

