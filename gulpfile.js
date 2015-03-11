var gulp = require('gulp');
    sass = require('gulp-ruby-sass');


gulp.task('sass', function() {
    return sass('assets/scss/style.scss', {sourcemap: false})
        .on('error', function (err) { console.log(err.message);})
        .pipe(gulp.dest('src/css'));
});

gulp.task('copy', function() {
    gulp.src('assets/*.html')
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/*.html', ['copy']);
});