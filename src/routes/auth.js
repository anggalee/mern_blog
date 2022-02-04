const express = require('express')

const router = express.Router();
const AuthCtrl = require('../controllers/auth')

router.post('/register', AuthCtrl.AuthReg)

module.exports = router