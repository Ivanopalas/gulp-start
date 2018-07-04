module.exports = function () {

    $.gulp.task('svg', function () {
        return $.gulp.src('./src/static/img/svg/*.svg')
            .pipe($.plug.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.plug.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.plug.replace('&gt:', '>'))
            .pipe($.plug.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('./build/img/svg/'))
    })

};