/* global module: false */
module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: { 'console': false },
        bitwise: true,
        camelcase: false,
        curly: false,
        eqeqeq: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        laxcomma: true,
        newcap: true,
        noarg: true,
        nonew: true,
        noempty: true,
        undef: true,
        unused: true,
        strict: false,
        trailing: true,
        maxlen: 200,
        browser: true
      }
    },

    uglify: {
      build: {
        expand: true,
        cwd: 'src/',
        src: [ '**/*.js' ],
        dest: 'build/'
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [ '**/*.css', 'font/*' ],
          dest: 'build/'
        }]
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    clean: [ 'build' ]
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'copy']);

};
