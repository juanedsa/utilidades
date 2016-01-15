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
})


.controller('ThisCtrl', function($scope) {

 

    $scope.saludo = "Hola Mundo";


    document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
    //     console.log(navigator.accelerometer);

    //     alert(navigator.accelerometer);

      $scope.onSuccess = function(acceleration) {
        // alert('Acceleration X: ' + acceleration.x + '\n' +
        //       'Acceleration Y: ' + acceleration.y + '\n' +
        //       'Acceleration Z: ' + acceleration.z + '\n' +
        //       'Timestamp: '      + acceleration.timestamp + '\n');

        $scope.acceleration = acceleration;

          console.log('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');

           /** Actualiza el html */
      $scope.$apply(function() {

     

        //alert('Acceleration Exitoso!!!');
      });


    };

    $scope.onError =function() {
        alert('onError!');
    };

    var options = { frequency: 1000 };  // Update every 3 seconds

    var watchID = navigator.accelerometer.watchAcceleration( $scope.onSuccess, $scope.onError, options);

    //alert(JSON.stringify(watchID));

    }

 

});
