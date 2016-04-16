'use strict';

let gulp = require('gulp');
let config = require('../config');
gulp.task('html', () => {
    return gulp.src(config.html + '/**/*.html').pipe(gulp.dest(config.build + '/html'));;
});