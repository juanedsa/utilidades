// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', ['$scope', '$cordovaOauth','$http',  function($scope, $cordovaOauth, $http) {

    $scope.login = function() {

      $cordovaOauth.google("25002918116-n4l4sjhuip2sp9goke32pnr40pijkbu0.apps.googleusercontent.com", ["email"]).then(function(result) {
          console.log("Response Object -> " + JSON.stringify(result));
          alert("Response Object -> " + JSON.stringify(result));

      }, function(error) {
          console.log("Error -> " + error);
          alert("Error -> " + error);
      });

    }

      $scope.loginFB = function() {

        $cordovaOauth.facebook("417766281751025", ["email", "public_profile", "user_friends"]).then(function(result) {
            console.log("Response Object -> " + JSON.stringify(result));
            alert("Response Object -> " + JSON.stringify(result));

        }, function(error) {
            console.log("Error -> " + error);
            alert("Error -> " + error);
        });

      }
}]);
