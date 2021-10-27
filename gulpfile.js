const {src, dest} = require('gulp')

const static = function(cb){
    // task
   return src('src/data/*.*')
    .pipe(dest('dist/data'))

    // temporial dead zone
    cb()

}

exports.default = static