//var zChat = require('./web-sdk');

zChat.init({
    account_key: '5aFslibEbbykmM6aR3wlREgnjA5ubBQe'
});

zChat.on('connection_update', function(status) {
    console.log('hello');
    if (status === 'connected') {
        // Start consuming your API here
        console.log("connected");
    }
});
function myFunction() {
    zChat.sendChatMsg('Hello, I want some help', function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Message sent by the visitor.');
        }
    });
};

zChat.on('chat', function(event_data) {
    if (event_data.type === 'chat.msg') {
        console.log('chat started');
        console.log(event_data.msg);
    }
});

function sendMessage() {
    zChat.sendChatMsg('hello', function(err) {
        if(err) {
            console.log(err);
        }
    });
}

