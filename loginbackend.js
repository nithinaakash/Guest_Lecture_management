var mysql = require('mysql');
var JSAlert = require("js-alert");
var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
 
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

app.get('/attend', function(req, res) {
  res.sendFile('C:/html pages/attendancepage.html');
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
          res.write("</center></head><body><center><br><br><h2><a href='http://localhost:8081/done'> Reset Link </a><h2> ");
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

  app.get("/feedback", function(req, res) {
    res.sendFile("C:/html pages/feedbackHome.html");
    res.status(200);
  });


  var n,m;

  app.post('/glect',function(req,res)
  
{
  
  //res.status(200);
   n1=req.body.textnames// || "rivatsa";
   n2=req.body.sex //|| "16";
   n3=req.body.dept //|| "CSE";
   n4=req.body.section// ||"E";
   n5=req.body.tfrom //||"12:12";
   n6=req.body.tto //||"12:12";
   n7=req.body.email //||"srivats.dhanaraj@gmail.com";
   n8=req.body.datefrm //||"25:25";
   n9=req.body.dateto //||"31:31";
   n10=req.body.mobile //||"2542542543";
   n11=req.body.lecture //||"english";
   
   

    
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

     var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
       user: 'srivatsa.dhanaraj@gmail.com',
        pass: 'Good2018'
      }
    });
    
    

    connection.connect(function(err) {
     
      connection.query("SELECT * FROM studdetails where section='"+n4+"' and dept='"+n3+"'", function(err, results, fields) {
        if(results.length<=0)
        {
          
          res.send("error");
          //res.render('indexforgotpassword',{data: {name : "Error"}});
          
        }
        else{var mailto=''
        for (i = 0; i < results.length-1; i++) {
            mailto+=results[i].email+','
        }
        mailto=mailto+results[i].email;
        var mailOptions = {
          from: 'srivatsa.dhanaraj@gmail.com',
          to: mailto,
          subject: 'Sending Email using Node.js',
          text: 'The lecture is from '+n5+'to'+n6+'on'+n8+'to'+n9
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

          res.sendFile("C:/html pages/glect2 (7).html");
        }
    });
  });






     console.log(length);
     //res.sendFile('C:/html pages/glect2 (7).html')
     res.status(200);

  });
  res.status(200);

});


app.post('/studbackend',function(req,res)
{
   n1=req.body.section1;
   n2=req.body.section2;
   
   
   

    
  connection.query('SELECT * from studdetails where dept=? and section=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
      var html='<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><title>Air Quality</title><center><h1>'+' STUDENTS DETAILS</h1></center></head>'+'<body><table class="table table-striped table-dark"><thead><tr> <th scope="col">#</th><th scope="col">name</th><th scope="col">email</th><th scope="col">pnum</th><th scope="col">cgpa</th><th scope="col">rno</th><th scope="col">Period 1</th><th scope="col">Period 2</th><th scope="col">Period 3</th><th scope="col">Period 4</th></tr></thead><tbody>';
      var i;
      for (i = 0; i < results.length; i++) {
      html+='<tr><th scope="row">'+i+'</th><td>'+results[i].name+'</td><td>'+results[i].email+'</td><td>'+results[i].pnum+'</td><td>'+results[i].cgpa+'</td><td>'+results[i].rno+'</td><td>'+results[i].p1+'</td><td>'+results[i].p2+'</td><td>'+results[i].p3+'</td><td>'+results[i].p4+'</td></tr>';
      }
      html+='</tbody></table></p><br><br><a href="http://localhost:8081/studpage" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-circle-arrow-left"></span> Back</a></body></html>';
        res.send(html);
     }
    });
    res.status(200);

});


app.get("/", function(req, res) {
  //res.sendFile('__dirname','first.html');
  console.log("gfdhgfh")
  res.sendFile("C:/html pages/loginfair.html");
  console.log("hjkhjlk")
});
app.get("/archive", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("C:/html pages/archiveHome.html");
});
/*
app.get("/mail", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("C:/html pages/loginfair.html");

});


app.post('/sendmail',function(req,res)
{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: 'srivatsa.dhanaraj@gmail.com',
      pass: 'Good2018'
    }
  });

  connection.query('SELECT * from studdetails where dept=? and section=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
      var html='<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><title>Air Quality</title><center><h1>'+' STUDENTS DETAILS</h1></center></head>'+'<body><table class="table table-striped table-dark"><thead><tr> <th scope="col">#</th><th scope="col">name</th><th scope="col">email</th><th scope="col">pnum</th><th scope="col">cgpa</th><th scope="col">rno</th><th scope="col">Period 1</th><th scope="col">Period 2</th><th scope="col">Period 3</th><th scope="col">Period 4</th></tr></thead><tbody>';
      var i;
      for (i = 0; i < results.length; i++) {
      html+='<tr><th scope="row">'+i+'</th><td>'+results[i].name+'</td><td>'+results[i].email+'</td><td>'+results[i].pnum+'</td><td>'+results[i].cgpa+'</td><td>'+results[i].rno+'</td><td>'+results[i].p1+'</td><td>'+results[i].p2+'</td><td>'+results[i].p3+'</td><td>'+results[i].p4+'</td></tr>';
      }
      html+='</tbody></table></p><br><br><a href="http://localhost:8081/studpage" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-circle-arrow-left"></span> Back</a></body></html>';
        res.send(html);
     }
    });




  var mailOptions = {
    from: 'srivatsa.dhanaraj@gmail.com',
    to: 'sahi.selva@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
});


*/
var rows,a,b;
app.post('/attendView',function(req,res)
{
  n1=req.body.dept;
  n2=req.body.section;
  connection.query('SELECT * from attendance where dept=? and section=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
      var html='<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><title>Attendance</title><center><h1>'+' STUDENTS DETAILS</h1></center></head>'+'<body><table class="table table-striped table-dark"><thead><tr> <th scope="col">#</th><th scope="col">name</th><th scope="col">DATA STRUCTURES</th><th scope="col">OPERATING SYSTEMS</th><th scope="col">DATABASE MANAGEMENT</th><th scope="col">NETWORKS</th></tr></thead><tbody>';
      var i;
      for (i = 0; i < results.length; i++) {
      html+='<tr><th scope="row">'+i+'</th><td>'+results[i].studname+'</td><td>'+results[i].subject1+'</td><td>'+results[i].subject2+'</td><td>'+results[i].subject3+'</td><td>'+results[i].subject4+'</td></tr>';
      }
      html+='</tbody></table></p><br><br><a href="http://localhost:8081/attend" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-circle-arrow-left"></span> Back</a></body></html>';
        res.send(html);
     }
    });

});
app.post("/archiveSubmit", function(req, res) {
  var lectname= req.body.lecturer;
   desc=req.body.desc;
   folder=req.body.folder;
  //console.log(sq+username);
  connection.query("INSERT INTO archive (lecturer,description,folder) VALUES ('"+lectname+"','"+desc+"','"+folder+"');",function (error, results, fields) {
    //var length=results.length;
    if (error) throw error;
    res.render('archiveHome',{data: {name : "Successfully Updated"}});



   
});
});
app.post('/feedbackView',function(req,res)
{
  n1=req.body.dept;
  a=n1
  n2=req.body.section;
  b=n2
  connection.query('SELECT * from feedback where dept=? and section=?',[n1,n2] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
       rows = results; 
      
      res.render('feedbackView',{rows:results});

     }
    });

});
app.post('/feedbackUpdate',function(req,res)
{
  n1=req.body.buttonVal;
  
   console.log(rows[n1])
   x1=rows[n1].lecturer;
  x2=rows[n1].rno;
  x3=rows[n1].subject;
  x4=rows[n1].stat;
  //  console.log(n1);
    //n2=rows[n1].stat;
  if(x4=='yes')
  {
    n2='no'
  }
  else{
    n2='yes'
  }
  connection.query('UPDATE feedback set stat = ? where lecturer=? and rno=? and subject=?',[n2,x1,x2,x3] ,function (error, results, fields) {
    var length=results.length;
     if(length<=0)
     {
       
       res.send(n1);
     }
     else{
      connection.query('SELECT * from feedback where dept=? and section=?',[a,b] ,function (error, results, fields) {
        var length=results.length;
         if(length<=0)
         {
           
           res.send(n1);
         }
         else{
           rows = results; 
          
          res.render('feedbackView',{rows:results});
    
         }
        });

     }
    });
    
  //res.send(x1+x2+x3+x4+n2);

});

var server=app.listen(8081,( ) =>{
  console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;