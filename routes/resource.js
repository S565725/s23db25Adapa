var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var yacht_controller = require('../controllers/yacht');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/yacht', yacht_controller.yacht_create_post);
// DELETE request to delete Costume.
router.delete('/yacht/:id', yacht_controller.yacht_delete);
// PUT request to update Costume.
router.put('/yacht/:id', yacht_controller.yacht_update_put);
// GET request for one Costume.
router.get('/yacht/:id', yacht_controller.yacht_detail);
// GET request for list of all Costume items.
router.get('/yacht', yacht_controller.yacht_list);





module.exports = router;