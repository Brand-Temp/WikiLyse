const express = require('express');
const controller = require('../controllers/getUserInfoController.js');
const router = new express.Router();

/* GET home page. */
router.get('/logged_in', controller.logged_in);
router.get('/get_user_name', controller.get_user_name);


module.exports = router;
