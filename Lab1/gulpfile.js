var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
    var options = {
        script: 'server.js'
    };
    return nodemon(options);
});