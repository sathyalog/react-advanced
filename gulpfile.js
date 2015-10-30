'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');

gulp.task('bundleTodo', function() {
    return browserify('./todo.js')
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('.'));
        // .pipe(livereload());
});

gulp.task('bundleCarousel', function() {
    return browserify('./carousel.js')
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('.'));
        // .pipe(livereload());
});

gulp.task('twowayBind', function() {
    return browserify('./twoway.js')
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('.'));
        // .pipe(livereload());
});
gulp.task('default', ['server']);

gulp.task('server', function(){
    connect.server({
        port: 8080,
        host: 'localhost'
    })
});