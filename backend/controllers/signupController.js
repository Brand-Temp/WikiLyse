const User = require('../models/user');
const crypto =require('crypto');


exports.Signup = function(req, res, next) {
  const uname = req.body.username;
  const pass_hash = req.body.hash;
  const emailaddr = req.body.email;
  
  // Check Username and Email available
  User.findOne({username: uname}, (err, data) => {
    if(data) {
      res.send({error: 1, field: 'username'});
    } else {
      User.findOne({email: emailaddr}, (err, data) => {
        if(data) {
          res.send({error: 1, field: 'email'});
        } else {
          User.create({username: uname, password: pass_hash, email: emailaddr}, (err, data) => {
            if(data) {
              res.send({error: 0, field: ''});
            } else {
              res.send({error: 1, field:''});
            }
          });
        }
      });
    }
  });
  
};

exports.Ucheck = function(req, res, next) {
  const uname = req.params['u'];
  User.findOne({username: uname}, (err, data) => {
    if(data) {
      res.send({used: 1});
      console.log('e ok');
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
