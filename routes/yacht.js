var express = require('express');
const yacht_controlers= require('../controllers/yacht');
var router = express.Router();
/* GET costumes */
router.get('/', yacht_controlers.yacht_view_all_Page);

// GET request for one costume.
router.get('/yacht/:id', yacht_controlers.yacht_detail);


/* GET detail costume page */
router.get('/detail', yacht_controlers.yacht_view_one_Page);

/* GET create costume page */
router.get('/create', yacht_controlers.yacht_create_Page);

/* GET create update page */
router.get('/update', yacht_controlers.yacht_update_Page);

/* GET delete costume page */
router.get('/delete', yacht_controlers.yacht_delete_Page);

module.exports = router;
