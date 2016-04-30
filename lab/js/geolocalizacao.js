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
      var data = {};
      var crd = pos.coords;

      data = {lat: crd.latitude, long: crd.longitude, acc: crd.accuracy};

      console.log("lat: " + crd.latitude);
      console.log("long: " + crd.longitude);
      console.log("acc: " + crd.accuracy);

      return data;
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    function geoLocalizar(){
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    button.addEventListener('click', geoLocalizar, false);
})();
