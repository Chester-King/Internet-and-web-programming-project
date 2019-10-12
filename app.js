var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3001;

var objec = {
  res1: {
    force: 'check fire'
  }
};

app.get('/', function(req, res) {
  res.render('home', { obhe: objec });
});

app.get('/api1', function(req, res) {
  res.render('api1');
});

app.post('/api1', function(req, res) {
  console.log(req.body);
  res.redirect('/');
});

app.get('/api2', function(req, res) {
  res.render('api2');
});

app.post('/api2', function(req, res) {
  console.log(req.body);
  res.redirect('/');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('*', function(req, res) {
  res.send('Wrong place man !!');
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
