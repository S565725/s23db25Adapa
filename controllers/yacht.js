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
   };
   // for a specific Costume.
exports.yacht_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await yacht.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   

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
   };   


//
// Handle Costume delete form on DELETE.
exports.yacht_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: yacht delete DELETE ' + req.params.id);
};



// Handle Costume update form on PUT.
//Handle Costume update form on PUT.
exports.yacht_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await yacht.findById( req.params.id)
 // Do updates of properties
 if(req.body.Color) toUpdate.Color = req.body.Color;
 if(req.body.Yacht_Number) toUpdate.Yacht_Number = req.body.Yacht_Number;
 if(req.body.Sizeof_Yacht) toUpdate.Sizeof_Yacht = req.body.Sizeof_Yacht;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
};
   // VIEWS
// Handle a show all view

exports.yacht_view_all_Page = async function(req, res) {
    try{
    theyacht = await yacht.find();
    res.render('yacht', { title: 'yacht Search Results', results: theyacht });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };


