// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var exampleApp = angular.module('starter', ['ionic', 'ngCordova'])

exampleApp.run(function($ionicPlatform) {
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
});


exampleApp.controller("ExampleController", function($scope, $cordovaCamera) {

    $scope.takePicture = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.FILE_URI, // paramtro para obtener la ruta del archivo
            sourceType : Camera.PictureSourceType.CAMERA, // parametro para obtener la imagen desde la camara
            allowEdit : false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            //$scope.imgURI = "data:image/jpeg;base64," + imageData;
            console.log("imageData " + imageData);
            alert("imageData " + imageData);
        }, function(err) {
            // An error occured. Show a message to the user
        });

    }

    $scope.archivo = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.FILE_URI, // paramtro para obtener la ruta del archivo
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY, // parametro para obtener la imagen desde la galeria
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        /** Metodo que obtiene ruta del archivo */
        $cordovaCamera.getPicture(options).then(function(imageData) {
            console.log("imageData " + imageData);
            alert("imageData " + imageData);
        }, function(err) {
            // An error occured. Show a message to the user
        });

    }

    $scope.obtenerBase64 = function () {

      var optionsURL = {
          quality : 75,
          destinationType : Camera.DestinationType.DATA_URL, // Parametro para obetener el base64 de la imagen
          sourceType : Camera.PictureSourceType.PHOTOLIBRARY, // parametro para obtener la imagen desde la galeria
          allowEdit : true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
      };

        /** Metodo que obtiene el base64 del archivo */
      $cordovaCamera.getPicture(optionsURL).then(function(imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
          console.log("imageData " + imageData);
      }, function(err) {
          // An error occured. Show a message to the user
      });

    }

});
