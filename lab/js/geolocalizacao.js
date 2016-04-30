(function(){
  var button = document.querySelector('.button');

  if(!navigator.geolocation){
    return false
  };

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      return crd.latitude, crd.longitude, crd.accuracy;
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    function geoLocalizar(){
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    button.addEventListener('click', geoLocalizar, false);
})();
