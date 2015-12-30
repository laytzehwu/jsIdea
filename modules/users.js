// Just use fake user list before step into database
var loadUserDB = function () {
    return require('./users.json');
}

exports.list = function (request, response) {
    response.json({
        code: 200,
        users: loadUserDB()
    });
};