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
      // Corrigir este módulo
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(
          function(permission){
            if(permission === 'granted'){
              var options = {body: 'Para que possamos exibir os estabelecimentos próximos, recarregue a página e autorize a localização.', icon: '../img/tagguia logotipo.png'};
              var n = new Notification('', options);
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
