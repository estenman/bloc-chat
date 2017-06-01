(function () {
    function HomeCtrl (Room) {
        this.availableRooms = Room.all
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
    
})();