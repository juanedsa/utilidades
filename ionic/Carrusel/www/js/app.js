// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  /** Se inicializa el carrusel de las tarjetas */
  $('#carousel').roundabout({
    minScale:0.2,
    childSelector:"li",
    duration: 300,
    responsive: true,
    btnNext: '#carrusel-next', // link que ejecuta la accion Next
    btnPrev: '#carrusel-previous' // link que ejecuta la accion Previous
  });

  /** Contenedor para enlazar los eventos */
  var contenedorCarrusel = document.getElementById('carouse-wrap');

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(contenedorCarrusel);

  // Escucha los eventos
  mc.on("panleft panright tap press", function(ev) {
      console.log(ev.type);

      /** Se detecta que tipo de evento es el que se ejectuto */
      if("panleft" === ev.type){
        $('#carrusel-next').trigger('click');
      }else if("panright" === ev.type){
        $('#carrusel-previous').trigger('click');
      }else if("tap" === ev.type){

      }else if("press" === ev.type){

      }
  }); 

})
