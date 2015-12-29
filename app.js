var express = require('express');
var app = express();

var userModule = require('./modules/users');
var authModule = require('./modules/auth');

app.set('port', (process.env.PORT || 5000));

// Static folder
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/login/', authModule.login);
app.get('/logout/', authModule.logout);

// All the request with path start from /api/ will run checkAuth
app.get(/^\/api\//, authModule.checkAuth);

app.get('/api/user/listall', userModule.list);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
