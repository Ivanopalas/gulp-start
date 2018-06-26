module.exports = function () {

	$.gulp.task('pug',function () {
		return $.gulp.src('src/pug/pages/*.pug')
			.pipe($.plug.pug({
				pretty:true
			}))
			.pipe($.gulp.dest('build'))
			.on('end',$.bs.reload);
	});
	
}