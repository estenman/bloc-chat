(function () {
    function roomFilter() {
        return function(roomName) {
            var str = roomName;
            var num = str.slice(4);
            var first = str.charAt(0).toUpperCase() + str.substring(1, 4);
            var output = first + " " + num; 
            
            return output
        };
        
    }
    
    angular
        .module('blocChat')
        .filter('roomFilter', roomFilter);  
})();