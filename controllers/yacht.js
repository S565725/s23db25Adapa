var yacht = require('../models/yacht');
// List of all Costumes
exports.yacht_list = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht list');
};
// for a specific Costume.
exports.yacht_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.yacht_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht create POST');
};
// Handle Costume delete form on DELETE.
exports.yacht_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.yacht_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht update PUT' + req.params.id);
};
