var express = require('express');
var router = express.Router();
const auth = require('./auth');

router.post('/auth/register', auth.register);

module.exports = router;