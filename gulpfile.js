var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('coffee', function() {
  gulp.src('./js/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/javascript'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('./js/**/*.coffee', ['coffee']);
});

gulp.task('default', ['sass', 'coffee', 'watch']);
