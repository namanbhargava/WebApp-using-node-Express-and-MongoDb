var socket = io();

socket.on('connect', function(){
  var chatForm = document.forms.chatForm;
  if(chatForm){

  var chatUsername = document. querySelector('#chat-username');
  var chatMessage = document.querySelector('#chat-message');

  chatForm.addEventListener('submit', function(e){
    e.preventDefault();

    socket.emit('postMessage',{
                  username: chatUsername.value,
                  message: chatMessage.value
                });
    chatMessage.value="";
  });


  socket.on('updateMessage', function(data){
    showMessage(data);
  })
  }

})

 function showMessage(data){
  var newMessage = document.createElement('p');
  newMessage.innerHTML = data.username + ': ' + data.message;
  var chatDisplay = document.querySelector('.chat-display');
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
