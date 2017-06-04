(function () {
    function ModalInstanceCtrl ($uibModalInstance) {
        var $ctrl = this;
        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');   
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
    
})();