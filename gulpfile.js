var gulp = require('gulp');
    sass = require('gulp-ruby-sass');
    prefix = require('gulp-autoprefixer');
    include = require('gulp-file-include');
    svgmin = require('gulp-svgmin');
    svgstore = require('gulp-svgstore');
    
gulp.task('sass', function() {
    return sass('assets/scss/style.scss') 
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(prefix())
    .pipe(gulp.dest('src/css'));
});

gulp.task('include', function() {
    gulp.src(['assets/index.html'])
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('svg', function () {
    return gulp.src('assets/img/svg/*.svg')
        // .pipe(svgmin({
        //     plugins: [{
        //         removeViewBox: false
        //     }, {
        //         removeUselessStrokeAndFill: false
        //     },{
        //         removeDoctype: true
        //     },{   
        //         removeComments: true
        //     }]
        // }))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest('assets/img/'));
});

gulp.task('watch', function() {
    gulp.watch(['assets/scss/**/*.scss', 'assets/*.html'], ['sass', 'include']);
});