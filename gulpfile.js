'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
 
gulp.task('dev:sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['dev:sass']);
});