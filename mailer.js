var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: 'srivatsa.dhanaraj@gmail.com',
    pass: 'Good2018'
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