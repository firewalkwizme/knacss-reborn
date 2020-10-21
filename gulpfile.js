const gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var CombineMQ = require('postcss-combine-media-query');
var autoprefixer = require('autoprefixer');
var CSSnano = require('cssnano');
var rename = require('gulp-rename');

gulp.task('css:full', () => {
  return gulp.src('sass/knacss.scss')
    .pipe(sass(
      {
      outputStyle: 'expanded'
      }))
    .pipe(
      postcss([
        // CombineMQ,
        autoprefixer,
        // CSSnano
      ]))
    .pipe(gulp.dest('css/knacss-full'));
});

gulp.task('css:mini', () => {
  return gulp.src('sass/knacss.scss')
    .pipe(sass(
      {
      outputStyle: 'compact'
      }))
    .pipe(
      postcss([
        CombineMQ,
        autoprefixer,
        CSSnano
      ]))
    .pipe(gulp.dest('css/knacss-mini'));
});

// Tâche BUILD : tapez "gulp" ou "gulp build"
gulp.task('build', gulp.series('css:full', 'css:mini'));

// Tâche par défaut
gulp.task('default', gulp.series('build'));
