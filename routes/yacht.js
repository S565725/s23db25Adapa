var express = require('express');
const yacht_controlers= require('../controllers/yacht');
var router = express.Router();
/* GET costumes */
router.get('/', yacht_controlers.yacht_view_all_Page);
module.exports = router;
