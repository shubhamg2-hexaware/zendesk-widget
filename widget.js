var zChat = require('web-sdk');

zChat.init({
    account_key: '5aFslibEbbykmM6aR3wlREgnjA5ubBQe'
});

module.exports = {

    "sendMessage": function() {
        zChat.sendChatMsg('hello', function(err) {
            if(err) {
                console.log(err);
            }
        });
    }
}