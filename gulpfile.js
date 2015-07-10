var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');

gulp.task('webpack', function (callback) {
	webpack({
		entry: './src/js/app.js',
		output: {
   	filename: 'build/js/bundle.js'
   }
	}, function (err, stats) {
		if (err) { console.log(err) }

		callback();
	});
});

gulp.task('sass', function () {
	gulp.src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('build/css'));
});

gulp.task('copy', function () {
	gulp.src('src/index.html')
	.pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
	gulp.watch('src/js/**/*', ['webpack']);
	gulp.watch('src/index.html', ['copy']);
	gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['webpack', 'sass', 'copy', 'watch']);