var notificacao = (function (){

  if (window.Notification){

    function notifica(title, message){
      if (Notification.permission === 'granted'){
        var icon = '../img/tagguia logotipo.png';
        var options = {
          body: message,
          icon: icon
        }
        var n = new Notification(title, options);
      } else if (Notification.permission !== 'granted') {
        Notification.requestPermission(
          function(permission){
            if(permission === 'granted'){
              notificacao.notifica('', 'Para que possamos exibir os estabelecimentos próximos, recarregue a página e autorize a localização.');
            } else if(permission !== 'granted'){
              alert('Para que possamos exibir os estabelecimentos próximos, recarregue a página e autorize a localização.');
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
