'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        config: '.eslintrc.json'
      },
      all: ['src/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%=grunt.template.today("yyyy-mm-dd")%>*/'
      },
      dist: {
        src: ['src/jquery.creascrollpagination.js'],
        dest: 'dist/jquery.creascrollpagination.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  //register default task
  grunt.registerTask('default', ['eslint', 'uglify']);
};
