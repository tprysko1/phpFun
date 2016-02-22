var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	var bootstrap = 'node_modules/bootstrap-sass/assets';
	var jquery = 'node_modules/jquery';

    mix.sass('app.scss')
    	.copy(jquery + '/dist/jquery.min.js', 'public/js')
    	.copy(bootstrap + '/fonts', 'public/fonts')
    	.copy(bootstrap + '/javascripts/bootstrap.min.js', 'public/js');
});
