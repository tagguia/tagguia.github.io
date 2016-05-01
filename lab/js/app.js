(function(){

  var button = document.querySelector('.button');

  if(!navigator.geolocation){
    button.style.display = "none";
  };

  // Para chamar a função, por que se for colocada direto como callback do addEventListener
  // ele chama sem necessidade de clicar
  function geolocaliza(){
    geoF.geoLocalizar()
  }

  button.addEventListener('click', geolocaliza, false);

})();
