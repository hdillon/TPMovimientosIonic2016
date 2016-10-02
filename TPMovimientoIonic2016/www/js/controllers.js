angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.username = "";
  $scope.mostrarLogin = true;
  $scope.mostrarLogout = false;

  $scope.loguear=function(username){
    if(username != ""){
      $scope.mostrarLogin = false;
      $scope.mostrarLogout = true;
      var usuario = { "nombre": username, "apellido" : "dillon"};
      $state.go('app.movimiento', usuario);
    }else{
      alert("Por favor ingrese su nombre");
    }    
  }

  $scope.desloguear=function(){
      $scope.username = "";
      $scope.mostrarLogout = false;
      $scope.mostrarLogin = true;
  }

})

.controller('LoginCtrl', function($scope) {
 
})


.controller('MovimientoCtrl', function($scope, $state, $stateParams) {
  $scope.usuario = angular.fromJson($stateParams);
  /*alert($scope.usuario.nombre);
  alert($scope.usuario.apellido);*/
  $scope.itemOnLongPress = function(id) {
    console.log('Long press');
  }

  $scope.itemOnTouchEnd = function(id) {
    console.log('Touch end');
  }

})


.controller('AutorCtrl', function($scope) {

});
