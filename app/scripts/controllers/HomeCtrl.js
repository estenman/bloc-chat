(function () {
    function HomeCtrl (Room) {
        this.availableRooms = Room.all
        console.log('available', this.availableRooms);
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
    
})();