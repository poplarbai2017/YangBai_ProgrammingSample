/**
 * Assign plugin dependencies
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var compass = require('gulp-compass');
var autoprefix = require('gulp-autoprefixer');
var debug = require('gulp-debug');
var plumber = require('gulp-plumber');

/**
 * Compile SASS files
 */
gulp.task('compass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(compass({
            config_file: './config.rb',
            css: 'css',
            sass: 'sass'
        }))
        .pipe(autoprefix('last 10 version'))
        .pipe(gulp.dest('css'));
});

/**
 * File watcher
 */
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['compass']).on('change', logTime);
});

gulp.task('default', ['compass', 'watch']);

/**
 * Utility functions
 */
function onError(err) {
    gutil.beep();
    console.log('There was an error: ' + err.message);
}

function logTime(event) {
    var now = getTheTime();
    console.log('['+now+'] ' + 'File '+event.path+' was '+event.type+', running tasks...');
}

function getTheTime() {
    var now = new Date();
    return ((now.getHours() < 10)?"0":"") + now.getHours() +":"+ ((now.getMinutes() < 10)?"0":"") + now.getMinutes() +":"+ ((now.getSeconds() < 10)?"0":"") + now.getSeconds();
}