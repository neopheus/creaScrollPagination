'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
  //register default task
  grunt.registerTask('default', 'watch');
};
