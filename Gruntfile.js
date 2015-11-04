module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		pkg: grunt.file.readJSON('package.json'),

		// License banner text
		banner: '/*\n' +
		' * <%= pkg.nativeName %> v<%= pkg.version %>\n' +
		' * <%= pkg.homepage %>\n' +
		' *\n' +
		' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
		' * Released under <%= pkg.license %> license\n' +
		' * <%= pkg.licenseUrl %>\n' +
		' */\n',
		uglify: {
			main: {
				options: {
					banner: '<%= banner %>',
					sourceMap: false,
					mangle: true,
					compress: true,
					beautify: false
				},
				files: {
					'jquery.twbsPagination.min.js':'jquery.twbsPagination.js'
				}
			}
		},
		// Run predefined tasks whenever watched file changed or deleted
		watch: {
			js: {
				options: {
					atBegin: true
				},
				files: ['jquery.twbsPagination.js'],
				tasks: [
					'build'
				]
			}
		}
	});

	// These plugins provide necessary tasks.
	require('load-grunt-tasks')(grunt);

	// Default task.
	grunt.registerTask('default', ['watch:js']);
	//
	//// Custom tasks
	grunt.registerTask('build', ['uglify:main']);
};
