if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js')
}

function shunno_push_api() {
  if (!Notification) {
    alert('Hello World!'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();

  var notification = new Notification('', {
    icon: 'https://i.imgur.com/Eesst9S.png',
    body: "Nova notificação!",
  });

}
