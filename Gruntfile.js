module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/* <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> by entfrm开发团队-王翔 */\n'
    },

    clean: {
      dist: 'dist/**'
    },

    usebanner: {
      all: {
        options: {
          banner: '<%= meta.banner %>',
          linebreak: false
        },
        files: {
          src: ['dist/*.js']
        }
      }
    },

    eslint: {
      target: ['index.js']
    },

    webpack: require('./webpack.config.js')
  });

  grunt.registerTask('test', 'Run the eslint', ['eslint']);
  grunt.registerTask('build', 'Run webpack and bundle the source', ['clean', 'webpack']);
  grunt.registerTask('version', 'Sync version info for a release', ['usebanner']);
};
