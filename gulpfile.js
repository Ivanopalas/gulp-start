'use strict';

global.$ = {
	gulp: require('gulp'),
	bs: require('browser-sync').create(),
	plug: require('gulp-load-plugins')(),

	path: {
		task : require('./gulp/config/tasks.js')
	}
};

$.path.task.forEach( function (taskPath) {
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('pug','styl','scriptlib','script','img:dev'),
	$.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
	$.gulp.parallel('pug','styl','scriptlib','script','img:build'),
	$.gulp.parallel('watch','serve')
));
