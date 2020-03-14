var mysql = require('mysql');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
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
   n1=req.body.section1;
   n2=req.body.section2;
   
   
   

    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database.');
  });
  connection.query('SELECT name,email,pnum,cgpa,rno from studdetails where dept=? and section=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
      var html='<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><title>Air Quality</title><center><h1>'+' STUDENTS DETAILS</h1></center></head>'+'<body><table class="table table-striped table-dark"><thead><tr> <th scope="col">#</th><th scope="col">name</th><th scope="col">email</th><th scope="col">pnum</th><th scope="col">cgpa</th><th scope="col">rno</th></tr></thead><tbody>';
      var i;
      for (i = 0; i < results.length; i++) {
      html+='<tr><th scope="row">'+i+'</th><td>'+results[i].name+'</td><td>'+results[i].email+'</td><td>'+results[i].pnum+'</td><td>'+results[i].cgpa+'</td><td>'+results[i].rno+'</td></tr>';
      }
      html+='</tbody></table></p></body></html>';
        res.send(html);
     }
    });


});
app.listen(8082);