var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');


gulp.task('browser-sync' , function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./*.html').on('change' , browserSync.reload);
  gulp.watch('./*.css').on('change' , broswerSync.reload);
   gulp.watch('./*.js').on('change' , broswerSync.reload);
})

gulp.task('concatScripts', function(){
  gulp.src(['jquery.js', 'reveal.js', 'main.js', 'script.js'])
  .pipe(concat("app.js"))
  .pipe(gulp.dest('js'))
})
