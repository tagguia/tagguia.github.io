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
      } else if (Notification.permission !== 'denied') {
        // Corrigir que está com erro no chrome, quando a notificação é liberada pela primeira vez, notifica sem valor.
        Notification.requestPermission(
          function(permission){
            if(permission === 'granted'){
              notificacao.notifica('', 'Para que possamos exibir os estabelecimentos próximos, recarregue a página e autorize a localização.');
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
