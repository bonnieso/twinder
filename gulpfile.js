// do the magic
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
 return gulp.src('./source/javascripts/**/*.js')
   .pipe(concat('all.js'))
   .pipe(gulp.dest('./public/javascripts/'));
})

gulp.task('default', ['scripts']);