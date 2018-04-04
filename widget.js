var zChat = require('web-sdk');

zChat.init({
    account_key: '5aFslibEbbykmM6aR3wlREgnjA5ubBQe'
});

zChat.sendChatMsg('hello', function(err) {
    console.log(err);
});