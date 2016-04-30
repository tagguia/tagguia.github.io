(function(){
  if(navigator.geolocation){
    console.log("Tem Geolocalização")

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      return new Object(
        lat: crd.latitude,
        long: crd.longitude,
        acc: crd.accuracy
      );
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    function geoLocalizar(){
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
    geoLocalizar();
  }
})();
