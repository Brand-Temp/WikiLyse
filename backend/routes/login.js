const express = require('express');
const router = new express.Router();
const controller =require('../controllers/loginController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({message: 'This route is set to be removed...'});
});

router.post('/', controller.login);

module.exports = router;
