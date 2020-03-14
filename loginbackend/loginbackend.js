var mysql = require('mysql');
var JSAlert = require("js-alert");
var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
 
var app = express();
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "root",
    port     : "3306",
    database : "mysql"
  });
  

  var n,m;
  app.post('/',function(req,res)
{
   n1=req.body.username;
   n2=req.body.password;
   var f=1;
  // res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        //res.status(500);
        f=f&&0;
        return;
      }
      console.log('Connected to database.');
      f=f&&1;
      res.status(200);
  });
  connection.query('SELECT * from login where username=? and password=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(results.length<=0)
     {
       //res.sendFile('C:/html pages/loginfair (2).html')
       res.render('index',{data: {name : "Error"}});
       f=f&&0;
       //res.status(500);
     }
     else{
     // res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      req.session.loggedin = true;
      req.session.username = n1;
      
      res.sendFile('C:/html pages/glect2 (7).html');
      //res.redirect('/home');
    // res.status(200);
    f=f&&1;
        
     }    
  
  
     
  });
  if(f==1)
  res.status(200);
  else
  res.status(500);


});
app.set('view engine','ejs');
app.get('/back',function(req,res)
{

res.sendFile('C:/html pages/glect2 (7).html');


});
app.get('/b', function(req, res) {
  res.sendFile('C:/html pages/b.html');
	res.status(200);	
	
});


app.get("/forgotpassword", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("C:/html pages/forgotpassword.html");
  res.status(200);
});
var username
app.post("/sec", function(req, res) {
    var sq= req.body.form_username;
     username=req.body.username;
    console.log(sq+username);

  
     connection.connect(function(err) {
     
        connection.query("SELECT * FROM login where secans='"+sq+"' and username='"+username+"'", function(err, results, fields) {
          if(results.length<=0)
          {
            
            //res.send("error");
            res.render('indexforgotpassword',{data: {name : "Error"}});
          }
          else{
            res.sendFile("C:/html pages/resetpwd.html");
          }
      });
    });
  });
  app.get("/forgotpassword/resetpassword", function(req, res) {
    //res.sendFile('__dirname','first.html');
    res.sendFile("C:/html pages/resetpwd.html");
    res.status(200);
  });
  app.post("/ret", function(req, res) {
    var sq= req.body.form_username;
    //console.log(n);
  
     connection.connect(function(err) {
        // UPDATE table_name
        // SET column1 = value1, column2 = value2, ...
        // WHERE condition;
        connection.query("update login set password ='"+sq+"' where username = '"+username+"'", function(err, result, fields) {
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
          res.write("<html> <head><center><h1>Your Password has been changed</h1>");
        //   var i;
        //   for(i=0;i<result.length;i++){
          res.write("</center></head><body><center><br><br><h2><a href='http://localhost:8080/done'> Reset Link </a><h2> ");
          res.write("</center</body></html>");
          res.end();
        
      });
    });
    res.status(200);
  });
  app.get("/done", function(req, res) {
    res.sendFile("C:/html pages/loginfair.html");
    res.status(200);
  });
  app.get("/studpage", function(req, res) {
    res.sendFile("C:/html pages/studdetails.html");
    res.status(200);
  });


  var n,m;

  app.post('/glect',function(req,res)
  
{
  
  //res.status(200);
   n1=req.body.textnames || "rivatsa";
   n2=req.body.sex || "16";
   n3=req.body.dept || "CSE";
   n4=req.body.section ||"E";
   n5=req.body.tfrom ||"12:12";
   n6=req.body.tto ||"12:12";
   n7=req.body.email ||"srivats.dhanaraj@gmail.com";
   n8=req.body.datefrm ||"25:25";
   n9=req.body.dateto ||"31:31";
   n10=req.body.mobile ||"2542542543";
   n11=req.body.lecture ||"english";
   
   

    
  connection.query("INSERT INTO guestlect (name,sex,dept,section,lecture,tfrom,tto,email,datefrm,dateto,mobile) VALUES ('" +
  n1+
  "','" +
 n2 +
  "','" +
  n3+
  "','" +
  n4+
  "','" +
  n11+
  "','" +
 n5+
  "','" +
 n6+
  "','" +
  n7+
  "','" +
  n8+
  "','" +
 n9+
  "','" +
 n10+
  "');", function (error, results, fields) {
    if (error) throw error;
     var length=results.length
  
     console.log(length);
     res.sendFile('C:/html pages/glect2 (7).html')
     res.status(200);

  });
  res.status(200);

});


app.post('/studbackend',function(req,res)
{
   n1=req.body.section1;
   n2=req.body.section2;
   
   
   

    
  connection.query('SELECT name,email,pnum,cgpa,rno from studdetails where dept=? and section=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
      var html='<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><title>Air Quality</title><center><h1>'+' STUDENTS DETAILS</h1></center></head>'+'<body><table class="table table-striped table-dark"><thead><tr> <th scope="col">#</th><th scope="col">name</th><th scope="col">email</th><th scope="col">pnum</th><th scope="col">cgpa</th><th scope="col">rno</th></tr></thead><tbody>';
      var i;
      for (i = 0; i < results.length; i++) {
      html+='<tr><th scope="row">'+i+'</th><td>'+results[i].name+'</td><td>'+results[i].email+'</td><td>'+results[i].pnum+'</td><td>'+results[i].cgpa+'</td><td>'+results[i].rno+'</td></tr>';
      }
      html+='</tbody></table></p><br><br><a href="http://localhost:8080/studpage" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-circle-arrow-left"></span> Back</a></body></html>';
        res.send(html);
     }
    });
    res.status(200);

});


app.get("/", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("C:/html pages/loginfair.html");
});


var server=app.listen(8080,( ) =>{
  console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;