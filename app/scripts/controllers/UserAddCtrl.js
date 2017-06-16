(function () {
    function UserAddCtrl($cookies, $uibModalInstance) {
        this.user = {};
        this.update= function() {
            this.user = angular.copy(this.userEntry);
            $cookies.put('blocChatCurrentUser', this.user.name);
            this.cancel();
            };
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel'); 
        }
    }
    
    angular
        .module('blocChat')
        .controller('UserAddCtrl', ['$cookies', '$uibModalInstance', UserAddCtrl]);
})();