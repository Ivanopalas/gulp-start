module.exports = function () {

	$.gulp.task('styl',function () {
		return $.gulp.src('src/static/stylus/main.styl')
			.pipe($.plug.sourcemaps.init())
			.pipe($.plug.stylus({
				'include scc': true
			}))
			.pipe($.plug.autoprefixer({ 
				browsers: ['last 10 versions'] 
			}))
			.on("error", $.plug.notify.onError({
				message: "Error",
			}))
			.pipe($.plug.csso())
			.pipe($.plug.sourcemaps.write())
			.pipe($.gulp.dest('build/css'))
			.pipe($.bs.reload({
				stream:true
			}));
	});
	
}