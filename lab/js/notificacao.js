var notificacao = (function (){

  if (window.Notification){

    function notifica(title, body){
      if (Notification.permission === "granted"){
        var icon = "../img/tagguia logotipo.png";
        var options = {
          body: body,
          icon: icon
        }
        var n = new Notification(title, options);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(
          function(permission){
            if(permission === 'granted'){
              var n = new Notification(title, options);
            } else if(permission === 'denied'){
              console.log('usuário não liberou a notificação');
              alert('usuário não liberou a notificação');
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
