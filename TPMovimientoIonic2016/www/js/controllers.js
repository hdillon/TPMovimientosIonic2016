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


.controller('MovimientoCtrl', function($scope, $state, $stateParams, $cordovaMedia, $ionicPlatform) {
  $scope.usuario = angular.fromJson($stateParams);
  /*alert($scope.usuario.nombre);
  alert($scope.usuario.apellido);*/
  $scope.itemOnLongPress = function(idSonido) {
    console.log("adasdasdas");
    switch(idSonido){
      case 'arriba':
      try{
        console.log("entro arriba");
        $scope._src = "arriba.mp3";
        $scope.mediaArriba = $cordovaMedia.newMedia($scope._src);
        $scope.mediaArriba.startRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'abajo':
      try{
        $scope._src = "abajo.mp3";
        $scope.mediaAbajo = $cordovaMedia.newMedia($scope._src);
        $scope.mediaAbajo.startRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'izquierda':
      try{
        $scope._src = "izquierda.mp3";
        $scope.mediaIzquierda = $cordovaMedia.newMedia($scope._src);
        $scope.mediaIzquierda.startRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'derecha':
      try{
        $scope._src = "derecha.mp3";
        $scope.mediaDerecha = $cordovaMedia.newMedia($scope._src);
        $scope.mediaDerecha.startRecord();
      }catch(error){
        console.log(error);
      }
      break;
      default:
      break;
    }
  

  }

  $scope.itemOnTouchEnd = function(idSonido) {
    switch(idSonido){
      case 'arriba':
      try{
        console.log("stopArriba");
        $scope.mediaArriba.stopRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'abajo':
      try{
        $scope.mediaAbajo.stopRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'izquierda':
      try{
        $scope.mediaIzquierda.stopRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'derecha':
      try{
        $scope.mediaDerecha.stopRecord();
      }catch(error){
        console.log(error);
      }
      break;
      default:
      break;
    } 
  }

/* TEST SONIDOS
  $scope.reproducir = function(idSonido){
    switch(idSonido){
      case 'arriba':
      try{
        console.log("reproducir arriba");
        $scope.mediaArriba.play(); // Android
      }catch(error){
        console.log(error);
      }
      break;
      case 'abajo':
      try{
        $scope.mediaAbajo.play(); // Android
      }catch(error){
        console.log(error);
      }
      break;
      case 'izquierda':
      try{
        $scope.mediaIzquierda.play(); // Android
      }catch(error){
        console.log(error);
      }
      break;
      case 'derecha':
      try{
        $scope.mediaDerecha.play(); // Android
      }catch(error){
        console.log(error);
      }
      break;
      default:
      break;
    } 
  }
*/

})


.controller('AutorCtrl', function($scope) {

});
