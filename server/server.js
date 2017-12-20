const express = require('express');
const bodyParser = require('body-parser');
const messages = require('./modules/messages');
const app = express();
const port = 60234;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( { extended: true } ));

app.listen(port, ()=>{
    console.log('server up on: ', port);
});

app.get('/messages', function(req, res){
    console.log('/messages get hit');
    res.send(messages.allMessages());
});

app.post('/messages', function(req, res){
    console.log('/messages post hit:', req.body);
    res.sendStatus(200);
});