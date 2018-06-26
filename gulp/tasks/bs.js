module.exports = function () {

	$.gulp.task('serve', function () {

	    // Serve files from the root of this project
	    $.bs.init({
	        server: {
	            baseDir: "./build"
	        }
	    });
	
	});
	
}