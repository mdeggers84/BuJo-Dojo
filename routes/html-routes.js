var db = require('../models');
var moment = require('moment');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Task.findAll({}).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  app.get('/edit/:id', function (req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      console.log(hbsObject);
      res.render('edit', hbsObject);
    });
  });
  
  app.get('/contact', function (req, res) {
    res.render('contact');
  });

  app.get('/thanks', function (req, res) {
    res.render('thanks');
  });

  app.get('/view/:date', function(req, res) {
    db.Task.findAll({
      where: {
        setDate: req.params.date
      }
    }).then(function(dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      res.render('date', hbsObject);
    });
  });
};
