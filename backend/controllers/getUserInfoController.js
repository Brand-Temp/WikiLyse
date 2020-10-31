exports.logged_in = function(req, res, next) {
  if(req.session.user != null) {
    res.send({message=1});
  } else {
    res.send({message=0});
  }
};

exports.get_user_name = function(req, res, next) {
  if(req.session.user != null) {
    res.send({message=req.session.user.username});
  } else {
    res.send({message=""});
  }
};