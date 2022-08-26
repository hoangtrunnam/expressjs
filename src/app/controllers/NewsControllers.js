class NewsControllers {
    // [get] /news
  index(req, res) {
    res.render("news");
  }
  // [get] /news/:slug
  show(req, res) {
    res.send('trang chi tiet tin tuc')
  }
}

module.exports = new NewsControllers