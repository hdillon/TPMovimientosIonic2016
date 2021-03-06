angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSplashscreen, $timeout) {
  
  $ionicPlatform.ready(function() {

    $cordovaSplashscreen.show()
    
    $timeout(function() {
    $cordovaSplashscreen.hide()
  }, 10000)


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
    cache: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/vistaLogin.html',
          controller: 'LoginCtrl'
      }
    }
  })
  .state('app.grabadora', {
      url: '/grabadora',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/vistaGrabadora.html',
          controller: 'MovimientoCtrl'
        }
      }
    })

  .state('app.movimiento', {
      url: '/movimiento',
      cache: false,
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
