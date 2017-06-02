(function() {
    function ChatModalCtrl($rootscope, $scope, $uibModal) {
        var $chatModal = this;
        $chatModal.open = function(size, template, $uibModal) {
            var modalInstance = $uibModal.open({
                templateURL: '/templates/roomSubmit2.html',
                size: size,
                controllerAs: '$chatModal',
            });
        };
    }
    angular
        .module('blocChat')
        .controller('ChatModalCtrl', ['$scope', '$uibModal', '$rootscope', chatModalCtrl]);
})();