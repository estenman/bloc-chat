(function () {
    function Room ($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        Room.add = function(room) {
            rooms.$add(room.myName).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                list.$indexFor(id); //returns location in the array
            });
        }
        
        var ref2 = firebase.database().ref().child("rooms").limitToFirst(1);
        console.log('ref2', ref2);
        var firstroom = $firebaseArray(ref2);
        console.log('firstroom', firstroom);
        console.log('firstroom 0', firstroom[0]);
        console.log('firstroom val', firstroom.value);
        Room.first = firstroom[0];
        
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();