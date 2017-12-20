console.log('JS');

class Message {
    constructor(from, message) {
        this.from = from;
        this.message = message;
    } //end constructor
}//end message class


$(document).ready(function (){
    getMessages();
    $('#addMessageButton').on('click', function(){
        console.log('in addMessageButton on click');
        //get user input
        //create an object with input
        let objectToSend = new Message($('#fromIn').val(), $('#messageIn').val());
        console.log('sending: ', objectToSend);
        
        //make a POST call via ajax
        $.ajax({
            method: 'POST',
            url: '/messages',
            data: 'objectToSend',
            success: function(response){
                console.log('back from post with:', response);
                getMessages();
            } //end success function
        }); //end ajax
    }); //end addMessage function
}); //end doc ready

function displayMessages (messages) {
    console.log('in displayMessages: ', messages);
    let $el = $('#messagesOut');
    $el.empty();
    for(let i = 0; i < messages.length; i++){
        $el.append('<li>"' + messages[i].message + '" - ' 
        + messages[i].from + '</li>')
    } //end for
}//end displayMessages

//****USING AJAX****
function getMessages () {
    console.log('in getMessages');
    $.ajax({
        method: 'GET',
        url: '/messages',
        success: function(response){
            console.log('back from the server with: ', response);
            displayMessages(response);
        }//end success function
    }) // end $.ajax method
} //end getMessages

