'use strict';

let fs = require('fs');
const gulp = require('gulp');

let files = fs.readdirSync(__dirname + '/tasks');
for (let i in files) {
    let name = __dirname + '/tasks/' + files[i];
    // Skip main task
    if (files[i] === 'development.js') continue;
    if (fs.statSync(name).isDirectory()) {
        
    } else {
        require(name);
    }
}

// Add main task
require(`${__dirname}/tasks/development.js`);

gulp.task('default', gulp.series('dev'));
