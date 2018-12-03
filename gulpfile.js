var gulp = require("gulp")
var scss = require("gulp-sass");
var minCss = require("gulp-clean-css");
var uglify = require("gulp-uglify")
var server = require("gulp-webserver")

//转换压缩css
gulp.task("devScss", function() {
    gulp.src("./src/scss/*.scss")
        .pipe(scss())
        .pipe(minCss())
        .pipe(gulp.dest("./src/css/"))
});

//压缩js
gulp.task("uglify", function() {
    gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./src/minjs/"))
})


gulp.task("wacth", function() {
    gulp.watch("./src/scss/*.scss", gulp.series("devScss", "uglify"))
})

gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8901
        }))
})

gulp.task("dev", gulp.series("devScss", "uglify", "server", "wacth"))