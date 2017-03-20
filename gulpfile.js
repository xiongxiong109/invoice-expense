var gulp = require('gulp');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('postcss', function() {
	return gulp.src('./public/css_source/**/*.css')
				 .pipe(sourcemaps.init())
				 .pipe(postcss())
				 .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function() {
	gulp.watch('./public/css_source/**/*.css', ['postcss']);
});

gulp.task('default', function() {
	gulp.start('postcss');
	gulp.start('watch');
});