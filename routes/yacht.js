var express = require('express');
const yacht_controlers= require('../controllers/yacht');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  };
/* GET costumes */
router.get('/', yacht_controlers.yacht_view_all_Page);

// GET request for one costume.
router.get('/yacht/:id', yacht_controlers.yacht_detail);


/* GET detail costume page */
router.get('/detail', yacht_controlers.yacht_view_one_Page);

/* GET create costume page */
router.get('/create', yacht_controlers.yacht_create_Page);

/* GET create update page */
router.get('/update',secured, yacht_controlers.yacht_update_Page);
/* GET update costume page */
//router.get('/update', 'secured', yacht_controlers.yacht_update_Page);
// A little function to check if we have an authorized user and continue on or
// redirect to login.

 /* GET update costume page */
//router.get('/update', secured, yacht_controlers.yacht_update_Page);

/* GET delete costume page */
router.get('/delete', yacht_controlers.yacht_delete_Page);

module.exports = router;
