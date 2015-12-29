// Just use fake user list before step into database
var users = [
    {
        id: 1,
        name: "Lay",
        email: "lay@test.com"
    },
    {
        id: 2,
        name: "Tan",
        email: "tan@test.com"
    },
    {
        id: 3,
        name: "Lee",
        email: "lee@test.com"
    },
    {
        id: 4,
        name: "Lim",
        email: "lim@test.com"
    }
];

exports.list = function (request, response) {
    response.json({
        code: 200,
        users: users
    });
};