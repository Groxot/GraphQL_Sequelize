'use strict';
var gulp = require('gulp');
var spawn = require('child_process').spawn;
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var open = require('gulp-open');

gulp.task('default', [ 'node', 'open']);

gulp.task('db', function() {
	var child = spawn('node', ['sequelize-auto.js']);
	child.stdin.write("Run model generator.");

	child.stdout.on('data', function (data) {
		console.log('We received a reply: ' + data);
	});
	child.stderr.on('data', function (data) {
		console.log('There was an error: ' + data);
	});
});

 
gulp.task('open', function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://localhost:8080/graphql'}));
});
 


gulp.task('node', function() {
    nodemon({
            script: 'index.js', 
            ext: ' js',
            ignore: ['ignored.js']
        })
        .on('change', ['lint'])
        .on('restart', function() {
            console.log('restarted!');
        })

});

gulp.task('lint', function() {
    gulp.src('./server/**/*.js')
        .pipe(jshint())
});

/**
 * for examples
 */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./client",
            routes: {
                "/node_modules":"node_modules"
            }
        }
    });

    gulp.watch("./client/**/*.html", browserSync.reload);
    gulp.watch("./client/**/*.ts", browserSync.reload);
});