var buffer = {
    loggedIn: false
};

exports.checkAuth = function (request, response, next) {
    console.log("Checking auth for " + request.path + " ...");
    // Note: This is a bad practice. Just for trying before I learn session
    if(buffer.loggedIn) {
        next();
    } else {
        response.status(403);
        response.end();
    }
}

exports.login = function (request, response) {
    console.log("User logged in ");
    buffer.loggedIn = true;
    response.json({
        code: 200,
        message: "User logged in"
    });
}

exports.logout = function (request, response, next) {
    console.log("User loggout in ");
    buffer.loggedIn = false;
    response.json({
        code: 200,
        message: "User logged out"
    });
}