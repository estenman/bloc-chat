(function () {
    function ModalInstance ($uibModalInstance) {
        var ModalInstance = {};
        this.closeModal = function () {
            $uibModalInstance.close();   
        };
        return ModalInstance;
    }
    
    angular
        .module('blocChat')
        .factory('ModalInstance', ['$uibModalInstance', ModalInstance]);
    
})();