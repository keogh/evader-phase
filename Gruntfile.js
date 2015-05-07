'use strict'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          //livereload: 35729,
          base: 'app',
          open: true,
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('server', [
    'connect:server'
  ]);
}