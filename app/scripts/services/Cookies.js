(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/usernameSubmit.html',
                controller: 'UserAddCtrl',
                controllerAs: 'userAdd'
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();