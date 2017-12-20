let messages = [
    { 
        from: 'Abe Lincoln', 
        message: 'Be excellent to each other and party on dudes!'
    }
]; //end messages

let gimmeAllMessages = ()=> {
    return messages;
} //end gimmeAllMessages

module.exports = {
    allMessages: gimmeAllMessages
};