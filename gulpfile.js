const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const path = require('path');

gulp.task('sass', function () {
  return gulp
    .src(path.join(__dirname, 'static/sass/home.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.join(__dirname, 'static/css')));
});

gulp.task('watch', function () {
  gulp.watch(path.join(__dirname, 'static/sass/home.scss'), gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));