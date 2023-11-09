var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString = 
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);


var yacht=require('./models/yacht');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var yachtRouter = require('./routes/yacht');
var resourceRouter = require('./routes/resource');


// We can seed the collection if needed on 
//server start
async function recreateDB(){
 // Delete everything
 await yacht.deleteMany();
 let instance1 = new 
 yacht({Color:"green", Yacht_Number:31, 
Sizeof_Yacht:15.4});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });


 //await yacht.deleteMany();
 let instance2 = new 
 yacht({Color:"blue", Yacht_Number: 32, 
Sizeof_Yacht:6000});
 instance2.save().then(doc=>{
 console.log("Second object saved")}
 ).catch(err=>{
 console.error(err)
 });
 

 //await Costume.deleteMany();
 let instance3 = new 
 yacht({Color:"black", Yacht_Number:33, 
Sizeof_Yacht:8000});
 instance3.save().then(doc=>{
 console.log("Third object saved")}
 ).catch(err=>{
 console.error(err)
 });








}
let reseed = true;
if (reseed) {recreateDB();
}





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/yacht', yachtRouter);
app.use('/resource', resourceRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});



module.exports = app;
