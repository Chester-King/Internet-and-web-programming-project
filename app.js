var express = require('express');
var app = express();

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
  res.send('API-1 Follow Attack');
});

app.get('/api2', function(req, res) {
  res.send('API-2 Like Attack');
});

app.get('*', function(req, res) {
  res.send('Wrong place man !!');
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
