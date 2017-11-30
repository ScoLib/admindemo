let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .styles([
        'resources/assets/css/reset.css',
        'resources/assets/css/app.css',
    ], 'public/css/app.css')
    .copyDirectory('resources/assets/images', 'public/images')
    .webpackConfig({
        output: {
            chunkFilename: `js/[name]${
                mix.inProduction() ? '.[chunkhash].chunk.js' : '.chunk.js'
                }`,
            publicPath: '/',
        }
    })
    .js('resources/assets/vendor/admin/main.js', 'public/js/admin.js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery', 'jquery'],
        vue: 'Vue'
    })
    .less(
        'resources/assets/vendor/admin/less/admin.less',
        'public/css/admin.css'
    );

if (mix.inProduction()) {
    mix.version();
}
