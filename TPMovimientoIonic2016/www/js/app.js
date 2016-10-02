angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/vistaLogin.html',
          controller: 'LoginCtrl'
      }
    }
  })

  .state('app.movimiento', {
      url: '/movimiento/:nombre:apellido',
      views: {
        'menuContent': {
          templateUrl: 'templates/vistaMovimiento.html',
          controller: 'MovimientoCtrl'
        }
      }
    })
    .state('app.autor', {
      url: '/autor',
      views: {
        'menuContent': {
          templateUrl: 'templates/vistaAutor.html',
          controller: 'AutorCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/login');
});
