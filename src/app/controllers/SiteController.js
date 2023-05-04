const Course = require('../models/Course.model');

class SiteController {
  // [GET] /home
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render('home', { courses });
      })
      .catch(next);
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
