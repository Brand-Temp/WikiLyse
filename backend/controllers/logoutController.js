
exports.logout = function(req, res, next) {
    req.session.destroy();
    res.send({message: 'Logout successful', sess_id: req.session.id});   
  };
  