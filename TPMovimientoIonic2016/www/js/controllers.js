angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.username = "";
  $scope.mostrarLogin = true;
  $scope.mostrarLogout = false;

  $scope.loguear=function(username){
    if(username != ""){
      $scope.mostrarLogin = false;
      $scope.mostrarLogout = true;
      //var usuario = { "nombre": username, "apellido" : "dillon"};
      //$state.go('app.movimiento', usuario);
      $state.go('app.movimiento');
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

.controller('MovimientoCtrl', function($scope, $cordovaMedia, $timeout, $cordovaDeviceMotion) {

  $scope.X;
  $scope.Y;
  $scope.Z;
  $scope.TIMESTAMP;
  $scope.ultimoPlay = '';

/************GRABADORA DE SONIDO********************/
  $scope.itemOnLongPress = function(idSonido) {
    switch(idSonido){
      case 'arriba':
      try{
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
       case 'acostadoArriba':
      try{
        $scope._src = "acostadoarriba.mp3";
        $scope.mediaBocaArriba = $cordovaMedia.newMedia($scope._src);
        $scope.mediaBocaArriba.startRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'acostadoAbajo':
      try{
        $scope._src = "acostadoabajo.mp3";
        $scope.mediaBocaAbajo = $cordovaMedia.newMedia($scope._src);
        $scope.mediaBocaAbajo.startRecord();
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
        $scope.mediaArriba.stopRecord();
        //$scope.$on('$destroy', $scope.mediaArriba);
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
      case 'acostadoArriba':
      try{
        $scope.mediaBocaArriba.stopRecord();
      }catch(error){
        console.log(error);
      }
      break;
      case 'acostadoAbajo':
      try{
        $scope.mediaBocaAbajo.stopRecord();
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

/***************FIN GRABADORA***************************/

  /*document.addEventListener("deviceready", function () {

    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      $scope.X = result.x;
      $scope.Y = result.y;
      $scope.Z = result.z;
      $scope.TIMESTAMP = result.timestamp;

      alert("X = " + $scope.X + " Y = " + $scope.Y + " Z = " + $scope.Z);
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  }, false);*/


  // watch Acceleration
  

  document.addEventListener("deviceready", function () {
    var options = { frequency: 1000 };

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope.X = parseInt(result.x);
        $scope.Y = parseInt(result.y);
        $scope.Z = parseInt(result.z);
        $scope.TIMESTAMP = result.timestamp;
        //alert("X = " + $scope.X + " Y = " + $scope.Y + " Z = " + $scope.Z);

        if($scope.X > 4 && $scope.ultimoPlay != 'izquierda'){
          try{
            $scope.mediaIzquierda.play(); // Android
            $scope.ultimoPlay = 'izquierda';
            }catch(error){
              console.log(error);
            }
        }

        if($scope.X < -4 && $scope.ultimoPlay != 'derecha'){
          try{
          $scope.mediaDerecha.play(); // Android
          $scope.ultimoPlay = 'derecha';
          }catch(error){
            console.log(error);
          }
        }

        if($scope.Z == 9 && $scope.ultimoPlay != 'bocaArriba'){
          try{
          $scope.mediaBocaArriba.play(); // Android
          $scope.ultimoPlay = 'bocaArriba';
          }catch(error){
            console.log(error);
          }
        }

        if($scope.Z == -9 && $scope.ultimoPlay != 'bocaAbajo'){
          try{
          $scope.mediaBocaAbajo.play(); // Android
          $scope.ultimoPlay = 'bocaAbajo';
          }catch(error){
            console.log(error);
          }
        }

        if($scope.Y < -6 && $scope.ultimoPlay != 'abajo'){
          try{
          $scope.mediaAbajo.play(); // Android
          $scope.ultimoPlay = 'abajo';
          }catch(error){
            console.log(error);
          }
        }

        if($scope.Y > 6 && $scope.ultimoPlay != 'arriba'){
          try{
          $scope.mediaArriba.play(); // Android
          $scope.ultimoPlay = 'arriba';
          }catch(error){
            console.log(error);
          }
        }

    });
  });



})


.controller('GrabadoraCtrl', function($scope, $state, $stateParams, $cordovaMedia) {
  $scope.usuario = angular.fromJson($stateParams);
  /*alert($scope.usuario.nombre);
  alert($scope.usuario.apellido);*/


})


.controller('AutorCtrl', function($scope, $cordovaInAppBrowser) {
  $scope.miFoto = 'img/perfil.png';
  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  $scope.InAppBrowser=function(){
    $cordovaInAppBrowser.open('https://github.com/hdillon', '_system', options);
  }

});
