var geoF = (function(){

    //Configura os parametros da geolocalização
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    // Caso o usuário permita a geolocalização exibe as coordenadas
    function success(pos) {
      var data = {};
      var crd = pos.coords;

      data = {lat: crd.latitude, long: crd.longitude, acc: crd.accuracy};

      console.log(data);

      return data;
    };

    // Caso o usuário negue a geolocalização exibe erro no console
    // e notifica o usuário da necessidade de autorização
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
      alert("Para que o app possa te fornecer informações relevantes, é necessário que você permita que ele obtenha sua localização, recarregue a página e tente novamente.");
    };

    // Executa a geolocalização
    function geoLocalizar(){
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return {
      geoLocalizar: geoLocalizar
    }

})();
