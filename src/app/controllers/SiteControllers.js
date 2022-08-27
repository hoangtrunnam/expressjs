const Course = require('../models/Course')
class SiteControllers {
    // [get] /home
  index(req, res) {
    Course.find({}, function (err, courses) {
      if(!err) {
        res.json(courses);
        return
      }
      res.status(400).json({ error: 'da co loi xay ra' })
    });
    // res.render("home");
  }
  // [get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers