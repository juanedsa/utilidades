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
