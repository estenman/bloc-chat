(function () {
    function HomeCtrl (Room, $uibModal, Message, $cookies, $filter) {
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
            this.activeRoomSelected = true;
            console.log('active room', this.activeRoom);
        };
        
        this.activeMessage = {};
        this.messageActivation = function(roomKey) {
            this.activeMessage = Message.getByRoomId(roomKey);
            
        };
        
        this.newMessage= {}
        this.messageSubmit = function() {
            this.newMessage = angular.copy(this.messageObject);
            this.newMessage.roomId = Message.activeRoomId;
            this.newMessage.username = $cookies.get('blocChatCurrentUser');
            this.newMessage.sentAt = $filter('date')(new Date(), 'hh:mm a')
            Message.send(this.newMessage);
            this.messageObject = '';
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', '$filter', HomeCtrl]);
    
})();