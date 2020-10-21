const gulp = require('gulp');
var postcss = require('gulp-postcss');
var CombineMQ = require('postcss-combine-media-query');
var CSSnano = require('cssnano');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
  return gulp.src('sass/knacss.scss')
    .pipe(
      postcss([
        CombineMQ,
        autoprefixer,
        // CSSnano
      ]))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['css']);
