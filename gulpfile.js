const {src, dest} = require('gulp')

const static = function(cb){
    // task
   return src([
    'src/data/*.*',
    'src/data/thumbnails/*.*'
   ], { base: './src/'})
    .pipe(dest('dist'))

    // temporial dead zone
    cb()

}

exports.default = static