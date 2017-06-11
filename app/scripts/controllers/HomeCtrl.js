(function () {
    function HomeCtrl (Room, $uibModal, Message) {
        this.availableRooms = Room.all
        this.open = function(size, templateUrl) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/roomSubmit.html',
                size: size,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl'
            });
        };
        
        this.activeRoom = {};
        this.roomActivation = function(selectedRoom) {
            console.log('selected room', selectedRoom);
            this.activeRoom = selectedRoom;
        };
        
        this.activeMessage = {};
        this.messageActivation = function(roomKey) {
            this.activeMessage = Message.getByRoomId(roomKey);
        };
        
        this.firstRoom = Room.first;
        console.log('first value', Room.first);
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
    
})();