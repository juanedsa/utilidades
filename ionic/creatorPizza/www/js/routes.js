angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('tabsController', {
      url: '/page6',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.ordenar', {
      url: '/ordenar',
      views: {
        'tab1': {
          templateUrl: 'templates/ordenar.html',
          controller: 'ordenarCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.carrito', {
      url: '/carrito',
      views: {
        'tab2': {
          templateUrl: 'templates/carrito.html',
          controller: 'carritoCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page6');

});