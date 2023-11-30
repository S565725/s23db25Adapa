var yacht = require('../models/yacht');
// List of all Costumes
exports.yacht_list = async function (req, res) {
   try {
      theyacht = await yacht.find();
      res.send(theyacht);
   }
   catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
   }
};
// for a specific Costume.
exports.yacht_detail = async function (req, res) {
   console.log("detail" + req.params.id)
   try {
      result = await yacht.findById(req.params.id)
      res.send(result)
   } catch (error) {
      res.status(500)
      res.send(`{"error": document for id ${req.params.id} not found`);
   }
};


// Handle Costume create on POST.
exports.yacht_create_post = async function (req, res) {
   console.log(req.body)
   let document = new yacht();
   // We are looking for a body, since POST does not have query parameters.
   // Even though bodies can be in many different formats, we will be picky
   // and require that it be a json object
   // {"costume_type":"goat", "cost":12, "size":"large"}
   document.Yacht_Color = req.body.Yacht_Color;
   document.Yacht_Number = req.body.Yacht_Number;
   document.Sizeof_Yacht = req.body.Sizeof_Yacht;
   try {
      let result = await document.save();
      res.send(result);
   }
   catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
   }
};
// Handle Costume delete on DELETE.
exports.yacht_delete = async function (req, res) {
   console.log("delete " + req.params.id)
   try {
      result = await yacht.findByIdAndDelete(req.params.id)
      console.log("Removed " + result)
      res.send(result)
   } catch (err) {
      res.status(500)
      res.send(`{"error": Error deleting ${err}}`);
   }
};

// Handle Costume delete form on DELETE.
/*exports.yacht_delete = function (req, res) {
   res.send('NOT IMPLEMENTED: yacht delete DELETE ' + req.params.id);
};*/
// Handle a show one view with id specified by query
exports.yacht_view_one_Page = async function(req, res) {
   console.log("single view for id " + req.query.id)
   try{
   result = await yacht.findById( req.query.id)
   res.render('yachtdetail', 
  { title: 'yacht Detail', toShow: result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };



// Handle Costume update form on PUT.
//Handle Costume update form on PUT.
exports.yacht_update_put = async function (req, res) {
   console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
   try {
      let toUpdate = await yacht.findById(req.params.id)
      // Do updates of properties
      if (req.body.Yacht_Color) toUpdate.Yacht_Color = req.body.Yacht_Color;
      if (req.body.Yacht_Number) toUpdate.Yacht_Number = req.body.Yacht_Number;
      if (req.body.Sizeof_Yacht) toUpdate.Sizeof_Yacht = req.body.Sizeof_Yacht;
      let result = await toUpdate.save();
      console.log("Sucess " + result)
      res.send(result)
   } catch (err) {
      res.status(500)
      res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
   }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.yacht_create_Page = function(req, res) {
   console.log("create view")
   try{
   res.render('yachtcreate', { title: 'Yacht Create'});
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };


  // Handle building the view for updating a costume.
// query provides the id
exports.yacht_update_Page = async function(req, res) {
   console.log("update view for item " + req.query.id);
   try {
     let result = await yacht.findById(req.query.id);
     res.render('yachtupdate', { title: 'Yacht Update', toShow: result });
   } catch (err) {
     res.status(500);
     res.send(`{'error': '${err}'}`);
   }
 };

 // Handle a delete one view with id from query
exports.yacht_delete_Page = async function(req, res) {
   console.log("Delete view for id " + req.query.id)
   try{
   result = await yacht.findById(req.query.id)
   res.render('yachtdelete', { title: 'Yacht Delete', toShow: 
  result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };
  
 
  
// VIEWS
// Handle a show all view

exports.yacht_view_all_Page = async function (req, res) {
   try {
      theyacht = await yacht.find();
      res.render('yacht', { title: 'yacht Search Results', results: theyacht });
   }
   catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
   }
};


