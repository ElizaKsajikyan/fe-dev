'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*']});

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    //compile config from separate files
    var config = require('load-grunt-configs')(grunt, {
        config: {
            src: 'grunt/config/*.js'
        }
    });

    // Define the configuration for all the tasks
    grunt.initConfig(config);

    grunt.registerTask('serve', function () {

        grunt.task.run([
            'concurrent:server',
            'connect:livereload',
            'watch'
        ]);

    });
};
