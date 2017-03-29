var socket = io();

socket.on('connect', function(){
   // console.log('Connected to Socket.io server');
});
socket.on('message', function(message){
    var momentTimestamp = moment.utc(message.momentTimestamp);
    console.log('New Message:');
    console.log(message.text);
    jQuery('.messages').append('<p><strong>'+ momentTimestamp.local().format('h:mm a') +'</strong>'  +': '+ message.text + '</p>');//target by class by putting a period
});

// Handles submitting of new message
var $form = jQuery('#message-form');//target by id using hash symbol

$form.on('submit', function(event){
    event.preventDefault();
    var $message= $form.find('input[name=message]'); //target by tag name by jut writing it
    socket.emit('message',{
        text: $message.val()
         
});
    $message.val('');

   
});