'use strict';

let gulp = require('gulp');
let del = require('del');
let config= require('../config');

gulp.task('clean', (cb) => {
    return del([config.build], cb);
});