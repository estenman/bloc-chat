(function () {
    function Message($firebaseArray) {
        var Message= {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        Message.getByRoomId = function(roomKey) {
            var x = ref.orderByChild('roomId').equalTo(roomKey);
            var roomMessages = $firebaseArray(x);
            console.log('message2', roomMessages);
            return roomMessages;
        };
        
        return Message;    
    };
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();