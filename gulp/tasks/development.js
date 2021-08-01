'use strict';

let gulp = require('gulp');

gulp.task('dev', gulp.series('clean', gulp.parallel('style', 'html', 'static-javascript')));
