angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.username = "";
  $scope.mostrarLogin = true;
  $scope.mostrarLogout = false;

  $scope.loguear=function(username){
    if(username != ""){
      $scope.mostrarLogin = false;
      $scope.mostrarLogout = true;
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


.controller('MovimientoCtrl', function($scope) {
 
})


.controller('AutorCtrl', function($scope) {

});
