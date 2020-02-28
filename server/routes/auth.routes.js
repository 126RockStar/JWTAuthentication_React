// import express from 'express'
// import authCtrl from '../controllers/auth.controller'

var express = require('express');
var authCtrl = require('../controllers/auth.controller');

const router = express.Router()

router.route('/auth/signin')
  .post(authCtrl.signin)
router.route('/auth/signout')
  .get(authCtrl.signout)

// export default router
module.exports = router;
