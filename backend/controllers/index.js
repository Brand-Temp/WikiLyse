// const jsonFileHandler = require('./jsonFileHandler');


exports.index = function(req, res, next) {
  res.send({message: 'Welcome to the API!'});
};
