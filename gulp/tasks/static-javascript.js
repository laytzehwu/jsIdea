'use strict';

let gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

let config = require('../config');

gulp.task('static-javascript-vender', () => {
   return gulp.src(config.vender)
       .pipe(concat('vender.js', {newLine:'\n'}))
       //.pipe(uglify())
       .pipe(gulp.dest(config.build + '/js'));
});

gulp.task('cp-angular', () => {
    return gulp.src('./node_modules/angular/angular.js')
        .pipe(rename('vender.js'))
        .pipe(gulp.dest(config.build + '/js'));
});

gulp.task('static-javascript', ['static-javascript-vender'], () => {
    return gulp.src([config.staticJavaScript + '/**/*.js'])
        //.pipe(uglify())
        .pipe(gulp.dest(config.build + '/js'));
});