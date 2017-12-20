console.log('JS');

$(document).ready(function (){
    getMessages();

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

