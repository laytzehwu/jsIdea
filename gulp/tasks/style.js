'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let config= require('../config');

gulp.task('style', () => {
    gulp.src(config.scss + '/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.build + '/style/'));
});