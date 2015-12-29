var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Static folder
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var checkAuth = function (request, response, next) {
    console.log("Checking auth for " + request.path + " ...");
    next();
}

// All the request with path start from /api/ will run checkAuth
app.get(/^\/api\//, checkAuth);

app.get('/api/user', function (request, response) {
    response.send("Calling user API");
    
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
