(function () {
    function RoomAddCtrl($scope, Room) {
        this.room ={};
        this.update = function() {
            this.room = angular.copy(this.roomx);
            Room.add(this.room);
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomAddCtrl', ['$scope', 'Room', RoomAddCtrl]);
})();