module.exports = function () {

	$.gulp.task('img:dev', function () {
	    return $.gulp.src('src/static/img/*.{jpg,png,gif,svg}')
	        .pipe($.gulp.dest('build/img'));
	});

	$.gulp.task('img:build', function () {
	    return $.gulp.src('src/static/img/*.{jpg,png,gif,svg}')
			.pipe($.plug.cache($.plug.imagemin({
				progressive: true,
				interlaced: true,
				pngquant: true
			})))
	        .pipe($.gulp.dest('build/img'));
	});
	
}