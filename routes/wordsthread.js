var express = require('express');
var router = express.Router();
var wordsthreadCtlr = require('../controllers/wordsthread.controller');
var validate = require('express-validation');
var numberValidation = require('../validations/number.validation');


router.get('/getList',validate(numberValidation.list), wordsthreadCtlr.list);

module.exports = router;