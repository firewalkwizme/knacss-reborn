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
        autoprefixer, // ajoute les préfixes vendeurs
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
        CombineMQ, // rassemble les Media Queries (parfait pour les classes utilitaires)
        autoprefixer, // ajoute les préfixes vendeurs
        CSSnano // minification 
      ]))
    .pipe(gulp.dest('css/knacss-mini'));
});

// Tâche BUILD : tapez "gulp" ou "gulp build"
gulp.task('build', gulp.series('css:full', 'css:mini'));

// Tâche par défaut
gulp.task('default', gulp.series('build'));
