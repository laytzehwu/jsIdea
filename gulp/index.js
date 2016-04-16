'use strict';

let fs = require('fs');

let files = fs.readdirSync(__dirname + '/tasks');
for (let i in files) {
    let name = __dirname + '/tasks/' + files[i];
    if (fs.statSync(name).isDirectory()) {
        
    } else {
        require(name);
    }
}