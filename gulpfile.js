// Gulp plugin setup
var gulp = require('gulp');
// Watches single files
var watch = require('gulp-watch')
var gulpShopify = require('gulp-shopify-upload')

gulp.task('shopifywatch', function() {
	return watch('./+(assets|layout|config|snippets|templates|locales)/**')
		.pipe(gulpShopify('API KEY', 'PASSWROD', 'MYSITE.myshopify.com', 'THEME ID'));
		});
