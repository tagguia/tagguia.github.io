var geoF = (function(){

    //Configura os parametros da geolocalização
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    // Loga no console o valor que for passado como parametro
    function exibeLog(l){
      console.log(l);
    }

    // Caso o usuário permita a geolocalização retorna os dados de geolocalizacao
    function success(pos) {
      var data = {};
      var crd = pos.coords;

      // inclui no objeto data a latitude, longitude e precisão recebidos da geolocalizacao
      data = {lat: crd.latitude, long: crd.longitude, acc: crd.accuracy};

      exibeLog(data);

      return data;
    };

    // Caso o usuário negue a geolocalização exibe erro no console
    // e alerta o usuário da necessidade de autorização
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
      alert("Para que possamos realizar a busca você precisa permitir a geolocalização, recarregue a página e tente de novo.");
    };

    // Executa a geolocalização com os callbacks
    function geoLocalizar(){
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return {
      geoLocalizar: geoLocalizar
    }

})();
