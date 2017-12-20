var express = require ('express');
var $ = require("jquery");
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var app = express();
var MongoClient = require('mongodb').MongoClient;//cd "\Program Files\MongoDB\Server\3.6\bin"


var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/useret');

mongoose.connection.once('open', function(){
    console.log('mongoose to mongodb connection has been made');
}).on ('error', function(error){
    console.log('mongoose failed connection to mongodb:', error);
});

app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine setup
app.set('view engine', 'jade');

app.get('/',(req, res, next) =>{
    return res.render('index', {title:'Home'});
});

app.get('/about',(req, res, next) =>{
    return res.render('about', {title: 'About'});
});

app.get('/lagallery',(req, res, next) =>{
    return res.render('lagallery', {title:'LA'});
});

app.get('/dubai',(req, res, next) =>{
    return res.render('dubai', {title:'dubai'});
});

app.get('/events',(req, res, next) =>{
    return res.render('events', {title: 'events'});
});

app.get('/blog',(req, res, next) =>{
return res.render('blog',{title:'blog'});
});

app.get('/quiz',(req, res, next) =>{
    return res.render('quiz', {title: 'quiz'});
});

app.get('/shop',(req, res, next) =>{
    return res.render('shop', {title:'shop'});
});

app.get('/contact',(req, res, next) =>{
    return res.render('contact', {title:'contact'});
});

app.post('/send',(req, res, next) =>{
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul> 
      <li>Name: ${req.body.name}</li>
      <li>email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.comments}</p>
  `;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: '', // generated ethereal user. Put your email here
      pass: '' // generated ethereal password. Put your password here 
  },
  tls:{
    rejectUnauthorized:false
  }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer Contact" <  >', // sender address. Put your email between <  >
    to: '', // list of receivers. Put your email here
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    return console.log(error);
}

console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
res.render('contact', {msg:"YOUR EMAIL HAS BEEN SENT"});

});
});




app.listen (3000, () =>{
console.log('it is working');
});
