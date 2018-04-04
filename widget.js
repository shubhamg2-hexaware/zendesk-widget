var zChat = require('https://dev.zopim.com/web-sdk/latest/web-sdk.js');

zChat.init({
    account_key: '5aFslibEbbykmM6aR3wlREgnjA5ubBQe'
});

zChat.on('connection_update', function(status) {
    if (status === 'connected') {
        // Start consuming your API here
        console.log("connected");
    }
})

module.exports = {

    "sendMessage": function() {
        zChat.sendChatMsg('hello', function(err) {
            if(err) {
                console.log(err);
            }
        });
    }
}