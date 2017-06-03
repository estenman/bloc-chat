(function () {
    function RoomAddCtrl($scope, Room, ModalInstance) {
        this.room ={};
        this.update = function() {
            this.room = angular.copy(this.roomx);
            Room.add(this.room);
        };
        this.close = this.closeModal;
    }
    
    angular
        .module('blocChat')
        .controller('RoomAddCtrl', ['$scope', 'Room', 'ModalInstance', RoomAddCtrl]);
})();