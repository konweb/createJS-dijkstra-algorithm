/* ========================================
//
//   gulpfile.babel.js
//    - build system の設定
//
// ======================================== */

// load modules
import run          from 'run-sequence';
import gulp         from 'gulp';
import {exec}       from 'child_process';
import stylish      from 'jshint-stylish';
import browserSync  from 'browser-sync';
import pluginLoader from 'gulp-load-plugins';
import rimraf       from 'rimraf';

// load configuration
import config       from './gulp-config';

let $        = pluginLoader();
let src      = config.src;
let dest     = config.dest;
let settings = config.settings;

// define tasks
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('release', ['css:minify', 'js:minify']);

/**
 * watch task
 */
gulp.task('watch', () => {
  $.watch(src.htmlFiles , () =>  run('html'));
  $.watch(src.cssFiles  , () =>  run('css:preprocessor'));
  $.watch(src.jsFiles   , () =>  run('js:linter' , 'js:webpack'));
  $.watch(src.imageFiles, () =>  run('image:minify'));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: dest.root
    },
    open: false
  });
});

/**
 * html task
 */
gulp.task('html', () => {
  return gulp.src(src.htmlFiles)
  .pipe($.pug({
    pretty: true
  }))
  .pipe(gulp.dest(dest.root))
  .pipe(browserSync.reload({
    stream: true
  }));
});

/**
 * js:webpack task
 */
gulp.task('js:webpack', () => {
  gulp.src(src.jsDir + '/main.coffee')
    .pipe($.webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(dest.jsDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});
/**
 * js:linter task
 */
gulp.task('js:linter', () => {
  gulp.src(src.jsFiles)
    .pipe($.plumber())
    .pipe(gulp.dest(dest.jsDir))
    .pipe($.filter((file) => !/lib/.test(file.path)))
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});

/**
 * js:minify task
 */
gulp.task('js:minify', () => {
  gulp.src(dest.jsFiles)
    .pipe($.uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(dest.jsDir));
});

/**
 * css:preprocessor task
 */
gulp.task('css:preprocessor', () => {
  gulp.src(src.cssFiles)
    .pipe($.plumber())
    .pipe($.filter(file => !/\/_/.test(file.path)))
    .pipe($.sass())
    .pipe($.autoprefixer(settings.autoprefixer))
    .pipe($.combineMq({
        beautify: true
    }))
    .pipe(gulp.dest(dest.cssDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/**
 * css:minify task
 */
gulp.task('css:minify', () => {
  gulp.src(dest.cssFiles)
    .pipe($.csso())
    .pipe(gulp.dest(dest.cssDir));
});

/**
 * image:minify task
 */
gulp.task('image:minify', () => {
  gulp.src(src.imageFiles)
    .pipe($.plumber())
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive      : true,
      interlaced       : true
    }))
    .pipe(gulp.dest(dest.imageDir));
});