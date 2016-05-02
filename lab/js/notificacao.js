var notificacao = (function (){

  if (window.Notification){

    function notifica(title, body){
      if (Notification.permission === "granted"){
        var icon = "../img/tagguia logotipo.png";
        var options = {
          body: body,
          icon: icon
        }
        var n = new Notification(title, body, options);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(
          function(permission){
            if(permission === 'granted'){
              var n = new Notification('','Para que possamos localizar os estabelecimentos próximos a você, por favor recarregue a página e autorize a localização', options);
            } else if(permission === 'denied'){
              console.log('Para que possamos localizar os estabelecimentos próximos a você, por favor recarregue a página e autorize a localização');
              alert('Para que possamos localizar os estabelecimentos próximos a você, por favor recarregue a página e autorize a localização');
            }
        });
      }
    }
  } else {
    console.log('Este navegador não tem suporte a notificação');
  }

  return {
    notifica: notifica
  }

})();
