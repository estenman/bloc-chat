(function () {
    function Message($firebaseArray) {
        var Message= {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        Message.getByRoomId = function(roomKey) {
            Message.activeRoomId = roomKey;
            var x = ref.orderByChild('roomId').equalTo(roomKey);
            var roomMessages = $firebaseArray(x);
            return roomMessages;
        };
        
        console.log('messages array', messages);
        Message.send = function(message) {              
            messages.$add(message);
        };
        
        return Message;    
    };
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();