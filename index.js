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

var buffer = {
    loggedIn: false
};

var checkAuth = function (request, response, next) {
    console.log("Checking auth for " + request.path + " ...");
    // Note: This is a bad practice. Just for trying before I learn session
    if(buffer.loggedIn) {
        next();
    } else {
        response.status(403);
        response.end();
    }
}

app.get("/login/", function (request, response) {
    buffer.loggedIn = true;
    response.send("Done");
});

app.get("/logout/", function (request, response) {
    buffer.loggedIn = false;
    response.send("Done");
});

// All the request with path start from /api/ will run checkAuth
app.get(/^\/api\//, checkAuth);

app.get('/api/user', function (request, response) {
    response.send("Calling user API");
});

app.get('/api/user/:id', function (request, response) {
    response.send("Reading user " + request.params.id);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
