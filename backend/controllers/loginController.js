const crypto =require('crypto');
const User =require('../models/user');

exports.login = function(req, res, next) {
  const uname = req.data.username;
  const paswd = req.data.password;
  User.findOne({username: uname, password: paswd}, function(err, data) {
    if (data) {
      req.session.user = data;
      res.send({message: 0, sess_id:req.session.id});
    } else {
      res.send({mesage: 1});
    }
  });
};
