// Grunt configuration.
module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          hostname: '127.0.0.1',
          port: 7001,
          base: '.'
        }
      }
    },
  });
 
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['connect']);
 
};
