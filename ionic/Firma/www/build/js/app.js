// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controller'])

.run(['$ionicPlatform', function($ionicPlatform) {
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
}]);

angular.module('starter.controller', ['ionic'])

.controller('SignatureCtrl', ['$scope', '$http',  function($scope, $http) {
    var canvas = document.getElementById('signatureCanvas');
    var signaturePad = new SignaturePad(canvas);

    signaturePad.minWidth = 1;
    signaturePad.maxWidth = 2;

    $scope.clearCanvas = function() {
        signaturePad.clear();
    }

    $scope.saveCanvas = function() {
        var sigImg = signaturePad.toDataURL();
        console.log("firma");
        console.log(sigImg.length);
        console.log(sigImg);

        $scope.signature = sigImg;

        var firma = sigImg.split(',');
        $http({
            method:  'post',
            url: "http://192.168.215.12:8081/payok/ventaMerchant.do/enviarCorreo",
            params: { 'movimientoId'      : 6168,
                      'firma'             :  firma[1],
                      'correoCliente'     : 'juanedsa@gmail.com',
                      'correoComercio'    : 'adgsgutierrez@gmail.com',
                      'version'           : '1.0'
                    },
            headers: {
                 'Content-Type'   :'application/x-www-form-urlencoded ',
                 'accept'         :'text/plain; q=0.5, text/html,text/x-dvi; q=0.8, text/x-c'
                  }

        }).success(function (response) {
            console.log("EXITO");
            console.log(response);
        }).error(function(response) {
            console.log(response);

        });

        function stringTohex(str) {
          var arr = [];
          for (var i = 0, l = str.length; i < l; i ++) {
            var hex = Number(str.charCodeAt(i)).toString(16);
            arr.push(hex);
          }
          return arr.join('');
        }
    }
}]);
