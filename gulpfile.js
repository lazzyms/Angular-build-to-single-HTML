var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var replace = require('gulp-replace');
var rename = require("gulp-rename");

gulp.task('inlinesource', function () {
  return gulp.src('./dist/main.html')
    .pipe(inlinesource())
    .pipe(rename('index.html'))
  //Destination for the resulting index.html
    .pipe(gulp.dest('../project/static/'));
});

gulp.task('replace', function () {
  gulp.src(['./dist/index.html'])
    .pipe(replace('<link href', '<link inline href'))
    .pipe(replace('<script type', '<script inline type'))
    .pipe(rename('main.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['replace', 'inlinesource']);
