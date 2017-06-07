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
            this.activeRoom = selectedRoom;
        };
        
        this.activeMessage = {};
        this.messageActivation = function(roomKey) {
            this.activeMessage = Message.getByRoomId(roomKey);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
    
})();