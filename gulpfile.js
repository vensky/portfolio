var gulp = require('gulp');
    sass = require('gulp-ruby-sass');
    prefix = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return sass('assets/scss/style.scss') 
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(prefix())
    .pipe(gulp.dest('src/css'));
});

gulp.task('copy', function() {
    gulp.src('assets/*.html')
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch(['assets/scss/**/*.scss', 'assets/*.html'], ['sass', 'copy']);
});