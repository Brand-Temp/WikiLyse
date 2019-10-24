const express =require('express');
const controller = require('../controllers/signupController');
const router = new express.Router;

router.get('/', function(req, res, next) {
  if(req.session.user!=null){
    res.render('signup.ejs', {flag:1,name:req.session.user.name});
  }
  return res.render('../views/signup.ejs',{flag:0});
});

router.post('/', controller.Signup);
router.get('/ucheck/:u', controller.Ucheck);
router.get('echeck/:e', controller.Echeck);

module.exports =router;
