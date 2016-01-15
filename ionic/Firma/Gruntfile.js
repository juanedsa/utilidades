module.exports = function(grunt) {

  grunt.initConfig({
    concat: {           //Step 1
      css: {            //Step 2
        src: [
          'www/css/*'
        ],
        dest: 'www/build/css/app.css'
      },
      js : {
        src : [
          'www/js/app.js',
          'www/js/controllers.js'

        ],
        dest : 'www/build/js/app.js'
      }
    },
    cssmin : {                                //Step 1
      css:{
          src: 'www/build/css/app.css',
          dest: 'www/build/css/app.min.css'
      }
    },
    uglify: {     //Step 1
        js: {
            files: {
                'www/build/js/app.min.js': ['www/build/js/app.js']
            }
        }
    },
    processhtml : {   //Step 1
     dist: {
       files : {
         'www/build/index.html' : 'www/index.html'
       }
     }
   }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat'); //Step 3
    grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-uglify');
       grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
  grunt.registerTask('default', ['concat:css','concat:js', 'cssmin:css', 'uglify:js', 'processhtml:dist']);  //Step 4
};
