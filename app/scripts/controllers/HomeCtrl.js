(function () {
    function HomeCtrl (Room, $uibModal) {
        this.availableRooms = Room.all
        this.open = function(size, templateUrl) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/roomSubmit.html',
                size: size,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
    
})();