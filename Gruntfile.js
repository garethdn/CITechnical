module.exports = function(grunt){
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  var config = {
    bower: 'bower_components/',
    app: 'app/',
    dist: 'dist/'
  };

  grunt.initConfig({
    clean: [config.dist],

    requirejs: {
      compile: {
        options: {
          baseUrl                 : config.app + 'scripts',
          name                    : 'main',
          out                     : config.dist + 'scripts/run.js',
          mainConfigFile          : config.app + 'scripts/build.js',
          useStrict               : true,
          preserveLicenseComments : false,
          generateSourceMaps      : true,
          optimize                : 'none'
        }
      }
    },

    copy: {
      html: {
        files: [{
          expand: true,
          dot: true,
          cwd: config.app,
          dest: config.dist,
          src: ['index.html']
        }]
      },

      requirejs: {
        files: [
          { src: config.bower + 'requirejs/require.js', dest: config.dist + 'scripts/require.js' }
        ]
      },

      handlebars: {
        files: [
          { src: config.app + 'scripts/templates.js', dest: config.dist + 'scripts/templates.js' }
        ]
      }
    },

    watch: {
      scripts: {
        files: [config.app + 'scripts/**/*.js'],
        tasks: ['requirejs']
      },
      sass: {
        files: [config.app + 'styles/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: [config.app + '**/*.html'],
        tasks: ['copy:html']
      },
      handlebars: {
        files: [config.app + '**/*.hbs'],
        tasks: ['handlebars', 'copy:handlebars']
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compact'
        },
        files: {
          'dist/styles/main.css' : 'app/styles/main.scss'
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          amd: true,
          processName: function(filePath) {
            return filePath.split('/').pop().split('.')[0];
          }
        },
        files: {
          'app/scripts/templates.js': [config.app + '/scripts/**/*.hbs']
        }
      }
    },

  });

  grunt.registerTask('build', ['clean', 'sass', 'handlebars', 'copy', 'requirejs']);
  grunt.registerTask('default', ['clean', 'sass', 'handlebars', 'copy', 'requirejs', 'watch']);
};