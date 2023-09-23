const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp
    .src('D:/projetos/SpotifyReplica/static/sass/home.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('D:/projetos/SpotifyReplica/static/css'));
});

gulp.task('watch', function () {
  gulp.watch('D:/projetos/SpotifyReplica/static/sass/home.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
