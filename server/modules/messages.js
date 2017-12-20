let messages = [
    { 
        from: 'Abe Lincoln', 
        message: 'Be excellent to each other and party on dudes!'
    }
]; //end messages

let addMessage = (newMessage) =>{
    messages.push(newMessage);
}

let gimmeAllMessages = ()=> {
    return messages;
} //end gimmeAllMessages

module.exports = {
    addMessage: addMessage,
    allMessages: gimmeAllMessages
};