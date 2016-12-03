// Watches files for changes and runs tasks based on the changed files
module.exports = {
    sass: {
        files: [
            '<%= project.app %>/styles/**/*.scss'
        ],
        tasks: ['sass']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= project.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= project.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }
};
