
exports.logout = function(req, res, next) {
    req.session.destroy();
    res.send({message: 1, sess_id: req.session.id});   
  };
  