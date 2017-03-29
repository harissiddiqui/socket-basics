var name = getQueryVariable('name') || 'Anonymous' ;
var room = getQueryVariable('room');
var socket = io();

console.log(name+ ' Wants to join ' + room );

socket.on('connect', function(){
   // console.log('Connected to Socket.io server');
});
socket.on('message', function(message){
    var momentTimestamp = moment.utc(message.momentTimestamp);
    var $message = jQuery('.messages');
    console.log('New Message:');
    console.log(message.text);
    $message.append('<p><strong>' +message.name + ' ' +  momentTimestamp.local().format('h:mm a') + '</strong></p>');
    //jQuery('.messages').append('<p><strong>'+ momentTimestamp.local().format('h:mm a') +'</strong>'  +': '+ message.text + '</p>');//target by class by putting a period
    $message.append('<p>' +message.text + '</p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');//target by id using hash symbol

$form.on('submit', function(event){
    event.preventDefault();
    var $message= $form.find('input[name=message]'); //target by tag name by jut writing it
    socket.emit('message',{
        name: name,
        text: $message.val()
         
});
    $message.val('');

   
});