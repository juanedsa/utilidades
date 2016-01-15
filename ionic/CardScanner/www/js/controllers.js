angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope) {

  /** Oculta el detalle de la tarjeta */
  $scope.detalleTarjeta = false;

  $scope.saludo = function(){

    alert('Hola mundo');
    console.log('Hola mundo');

  };

  /** Metodo encargado de escanear la tarjeta */
  $scope.escanearTarjeta = function(){

    
    /** Contiene los tags para leer la info de la tarjeta */
    $scope.cardIOResponseFields = [
            "card_type",
            "redacted_card_number",
            "card_number",
            "expiry_month",
            "expiry_year",
            "cvv",
            "zip"
    ];


    /** Configuracion para pedir la informacion de la tarjeta */
    CardIO.scan({
          "expiry": true,
          "cvv": false,
          "zip": false,
          "suppressManual": false,
          "suppressConfirm": false,
          "hideLogo": true
      },
      $scope.onCardIOComplete,
      $scope.onCardIOCancel
    );
  

  };

  /** Funcion que se ejecuta cuando el Escaneo es Exitoso */
  $scope.onCardIOComplete = function(response) {
      console.log("card.io scan complete");

      /** Se obtiene info de la tarjeta */
      $scope.tipoTarjeta    =  response["card_type"];
      $scope.numeroTarjeta  =  response["card_number"];
      $scope.mesExpiracion  =  response["expiry_month"];
      $scope.anoExpiracion  =  response["expiry_year"];

      /** Actualiza el html */
      $scope.$apply(function() {

        $scope.detalleTarjeta = true;

        alert('Escaneo Exitoso!!!');
      });

    };

    /** Funcion que se ejecuta cuando se cancela el scaneo */
    $scope.onCardIOCancel = function() {
      console.log("card.io scan cancelled");
    };

});