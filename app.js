var express = require('express');
var app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3001;

var objec = {
  res1: {
    force: 'check fire'
  }
};

app.get('/', function(req, res) {
  res.render('home.ejs', { obhe: objec });
});

app.get('/api1', function(req, res) {
  res.render('api1.ejs');
});

app.get('/api2', function(req, res) {
  res.render('api2.ejs');
});

app.get('/login', function(req, res) {
  res.render('login.ejs');
});

app.get('/signup', function(req, res) {
  res.render('signup.ejs');
});

app.get('*', function(req, res) {
  res.send('Wrong place man !!');
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
