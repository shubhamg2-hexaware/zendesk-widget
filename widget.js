//var zChat = require('./web-sdk');
window.onload = init;

function init() {

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
document.getElementById('btn').onclick = function () {
    zChat.sendChatMsg('hello', function(err) {
        if(err) {
            console.log(err);
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