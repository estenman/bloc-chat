(function () {
    function UserAddCtrl($cookies, /*$uibModalInstance, Cookies*/) {
        this.user = {};
        this.update= function() {
            this.user = angular.copy(this.userEntry);
            $cookies.put('blocChatCurrentUser', 'this.user');
            console.log('cookies', $cookies.blocChatCurrentUser);
            /*$cookiectrl.cancel(); */
            };
        /*var $cookiectrl = this;
        $cookiectrl.cancel = function () {
            $uibModalInstance.dismiss('cancel'); 
        }*/
    }
    
    angular
        .module('blocChat')
        .controller('UserAddCtrl', ['$cookies', /*'$uibModalInstance', 'Cookies',*/ UserAddCtrl]);
})();