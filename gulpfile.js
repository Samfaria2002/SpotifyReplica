const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('static/sass/home.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function() {
  gulp.watch('static/sass/home.scss', gulp.series('sass'));
});