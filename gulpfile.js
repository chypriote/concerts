var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var cp = require('child_process');
var clean = require('del');

var jekyll   = process.platform === 'win32' ? 'bundle.bat' : 'bundle';
var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};
var errorHandler = function (error) {console.log(error.message);this.emit('end');};

gulp.task('jekyll-build', ['images', 'sass', 'scripts'], function (done) {
	browserSync.notify(messages.jekyllBuild);
	// cp.exec('bundle exec jekyll build');
	return cp.spawn( jekyll , ['exec', 'jekyll', 'build'], {stdio: 'inherit'}).on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
		browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		online: false,
		server: {
			baseDir: '_site'
		}
	});
});

gulp.task('scripts', function(){
	return gulp.src('_scripts/main.js')
		.pipe(g.babel({
			presets: ['env']
		}))
		.pipe(g.rename({suffix: '.min'}))
		.pipe(g.uglify())
		.pipe(gulp.dest('assets/js'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('images', function(){
	return gulp.src('_images/**/*')
		.pipe(g.imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			optimizationLevel: 4,
			multipass: true,
			interlaced: true
		}))
		.pipe(gulp.dest('assets/images'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('sass', function () {
	return gulp.src('_sass/main.scss')
		.pipe(g.plumber({errorHandler}))
		.pipe(g.sass({
				includePaths: ['scss'],
				onError: browserSync.notify
		}))
		.pipe(g.autoprefixer('last 2 versions'))
		.pipe(g.rename({suffix: '.min'}))
		.pipe(g.cssnano())
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function () {
	gulp.watch('_sass/**/*.scss', ['sass']);
	gulp.watch('_scripts/*.js', ['scripts']);
	gulp.watch('_images/**/*', ['images']);
	gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);