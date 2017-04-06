/**
 * Created by user on 05.04.2017.
 */

var gulp = require('gulp');
//js
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
//css
var cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function(){
    return gulp.src('assets/dev/scripts/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/js'));
});

gulp.task('styles', function() {
    return gulp.src('assets/dev/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/css'));
});