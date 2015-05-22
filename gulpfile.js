/*global -$ */
'use strict';

var gulp = require('gulp');
var minimist = require('minimist');
var browserify = require('browserify');

var args = minimist(process.argv);
var express = require('express');

var output = 'build';

gulp.task('serve', function() {
  server = express();
  server.use(express.static(output));
  server.listen(8000);
  browserSync({ proxy: 'localhost:8000' });
});

gulp.task('scripts', function() {
  var b = browserify({
  	debug: true
  });
  b.add('./src/js/app.js');
  return b.bundle().on('error', handleError)
    .pipe(source('app.js'))
    .pipe(gulp.dest(output + 'js/'))  
});