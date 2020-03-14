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
   n1=req.body.name;
   n2=req.body.sex;
   n3=req.body.dept;
   n4=req.body.section;
   n5=req.body.tfrom;
   n6=req.body.tto;
   n7=req.body.email;
   n8=req.body.datefrm;
   n9=req.body.dateto;
   n10=req.body.mobile;
   n11=req.body.lecture;
   
   

    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database.');
  });
  connection.query("INSERT INTO guestlect (name,sex,dept,section,lecture,tfrom,tto,email,datefrm,dateto,mobile) VALUES (?, ?,?,?,?,?,?,?,?,?,?)",[n1,n2,n3,n4,n11,n5,n6,n7,n8,n9,n10], function (error, results, fields) {
    if (error) throw error;
     var length=results.length
  
     console.log(length);
  
  });


});
app.listen(8081);