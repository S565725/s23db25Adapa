var yacht = require('../models/yacht');
// List of all Costumes
exports.yacht_list = async function(req, res) {
    try{
    theyacht = await yacht.find();
    res.send(theyacht);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }



   exports.yacht_view_all_Page = async function(req, res) {
    try{
    theyacht = await yacht.find();
    res.render('yacht', { title: 'yacht Search Results', results: theyacht });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
   // Handle Costume create on POST.
exports.yacht_create_post = async function(req, res) {
    console.log(req.body)
    let document = new yacht();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Color = req.body.Color;
    document.Yacht_Number = req.body.Yacht_Number;
    document.Sizeof_Yacht = req.body.Sizeof_Yacht;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }



// List of all Costumes
/*exports.yacht_list = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht list');
};*/
// for a specific Costume.
exports.yacht_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht detail: ' + req.params.id);
};
// Handle Costume create on POST.
/*exports.yacht_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht create POST');
};*/
// Handle Costume delete form on DELETE.
exports.yacht_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.yacht_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht update PUT' + req.params.id);
};
