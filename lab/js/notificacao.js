var notificacao = (function (){

  if (window.Notification){

    function notifica(message){
      if (Notification.permission === 'granted'){
        var icon = '../img/tagguia logotipo.png';
        var options = {
          body: message,
          icon: icon
        }
        var n = new Notification(title, options);
      // Corrigir este módulo
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(
          function(permission){
            if(permission === 'granted'){
              var n = new Notification('', {body: 'Para que possamos exibir os estabelecimentos próximos, recarregue a página e autorize a localização.', icon: icon});
            } else if(permission === 'denied'){
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
