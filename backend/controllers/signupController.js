const User = require('../models/user');
const crypto =require('crypto');


exports.Signup = function(req, res, next) {
  const md5 =crypto.createHash('md5');
  const newPas = md5.update(req.body.password).digest('hex');
  const postData ={
    username: req.body.email,
    password: newPas,
    firstname: req.body.firstname,
    secondname: req.body.secondname,
  };
  User.findOne({username: postData.username}, function(err, data) {
    if (data) {
      
      res.render('error',{message:"This email has already been used.",flag:0});
    } else {
      User.create(postData, function(err, data) {
        if (err) throw err;
        res.render('error',{message:"Sign-up successful.",flag:0});
      });
    }
  });
};

exports.Ucheck = function(req, res, next) {
  const uname = req.params['u'];
  User.findOne({username: uname}, (err, data) => {
    if(data) {
      res.send({used: 1});
    } else {
      res.send({used: 0});
    }
  });
};

exports.Echeck = function(req, res, next) {
  const emailaddr = req.params['e'];
  User.findOne({email:emailaddr}, (err, data) => {
    if (data) {
      res.send({used: 1});
    } else {
      res.send({used: 0});
    }
  });
}
