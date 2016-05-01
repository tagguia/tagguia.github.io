(function(){

  var button = document.querySelector('.button');

  if(!navigator.geolocation){
    button.style.display = "none";
  };

  button.addEventListener('click', function(){geoF.geoLocalizar()}, false);

})();
