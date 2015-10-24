/* global app */

app.controller('pieCtrl', function($rootScope, $scope) {
    $scope.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    $rootScope.$watch('selectedMessage', function(message) {
        if(message) {
            var letters = message.contentSnippet.toLowerCase().match(/[a-z]/g).join('');
            var statistics = Array.apply(null, new Array($scope.labels.length)).map(Number.prototype.valueOf, 0);
            
            for(var i = letters.length - 1; i ; i--) {
                // 97 is character code for 'a'
                statistics[letters.charCodeAt(i) - 97]++;
            }
            
            $scope.data = statistics;
        }
    });
})