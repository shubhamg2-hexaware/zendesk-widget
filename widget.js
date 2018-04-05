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
})
function myFunction() {
    zChat.sendChatMsg('hello', function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('hello');
        }
    });
};

module.exports = {

    "sendMessage": function() {
        zChat.sendChatMsg('hello', function(err) {
            if(err) {
                console.log(err);
            }
        });
    }
}
}