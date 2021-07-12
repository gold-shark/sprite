var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

function defaultTask(cb) {
  // place code for your default task here
  var spriteData = gulp.src('image/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    imgPath: '../img/sprite.png',
    cssOpts: {
      cssSelector: function (sprite) {
        return '.sp-' + sprite.name;
      }
    }
  }))
  spriteData.img.pipe(gulp.dest('./output/img'));
  spriteData.css.pipe(gulp.dest('./output/css'));
  cb();
}

exports.default = defaultTask
