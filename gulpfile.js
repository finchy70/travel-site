var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Success');
});

gulp.task('html', function() {
  console.log('Success - HTML Task');
});

gulp.task('styles', function(){
  console.log('Success - CSS Stuff');
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
  gulp.start('html');
  });

  watch('./app/assets/styles/styles.css', function(){
  gulp.start('styles');
  });
});
