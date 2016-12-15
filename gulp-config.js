/* ========================================
//
//   gulp-config.js
//    - gulpfile.jsで使用する設定
//
// ======================================== */

import _ from 'underscore';

var webpack = require('webpack');
var path    = require('path');

const SRC_ROOT  = './src';
const DEST_ROOT = './docs';

let sprites = [
  {
    dir : `${SRC_ROOT}/sprite`,
    name: 'sprite'
  }
];

// constant
var settings = exports.settings = {
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'iOS 6',
      'Android 2.3'
    ]
  },
  spritesmith: getSprites()
};

var src = exports.src = {
  root       : SRC_ROOT,
  htmlFiles  : `${SRC_ROOT}/html/**/*.pug`,
  cssDir     : `${SRC_ROOT}/scss`,
  cssFiles   : `${SRC_ROOT}/scss/**/*.scss`,
  jsDir      : `${SRC_ROOT}/js`,
  jsFiles    : `${SRC_ROOT}/js/**/*.(coffee|js)`,
  imageDIr   : `${SRC_ROOT}/images`,
  imageFiles : `${SRC_ROOT}/images/**/*.{png,jpeg,gif,jpg}`
};

var dest = exports.dest = {
  root        : DEST_ROOT,
  htmlFiles   : `${DEST_ROOT}/**/*.html`,
  cssDir      : `${DEST_ROOT}`,
  cssFiles    : `${DEST_ROOT}/**/*.css`,
  jsDir       : `${DEST_ROOT}/js`,
  jsFiles     : `${DEST_ROOT}/js/**/*.js`,
  imageDir    : `${DEST_ROOT}/images`,
  imageFiles  : `${DEST_ROOT}/images/**/*.{png,jpeg,gif,jpg}`
};

function getSprites() {
  return _.map(sprites, (sprite) => {
    return {
      srcFile: `${SRC_ROOT}/${sprite.name}`,
      imgName: `${sprite.name}.png`,
      cssName: `_${sprite.name}.styl`,
      imgPath: `/pages/lp/challenge/sp/images/${sprite.name}.png`,
      destImg: `${DEST_ROOT}/images`,
      destCSS: `${SRC_ROOT}/styles/sprites`
    }
  });
}
