module.exports = function () {

	$.gulp.task('watch',function () {
		$.gulp.watch('src/pug/pages/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/stylus/**/*.styl', $.gulp.series('styl'));
		$.gulp.watch('src/static/js/**/*.js', $.gulp.series('script'));
		$.gulp.watch('src/static/img/*', $.gulp.series('img:dev'))
	});
	
}