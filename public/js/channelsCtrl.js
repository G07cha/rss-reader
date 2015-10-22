/* global app */

app.controller('channelsCtrl', function($scope, $http, $rootScope, $cookies) {
    const cookie_id = 'RSSChannels';
    $scope.channels = $cookies.getObject(cookie_id) || [];
    $rootScope.selectedChannel = $scope.channels[0];
    
    $scope.selectChannel = function(channel) {
        $rootScope.selectedChannel = channel;
    };
    
    $scope.removeChannel = function(channel) {
        var index = $scope.channels.indexOf(channel);
        $scope.channels.splice(index, 1);
        $rootScope.selectedChannel = $scope.channels[0];
        $cookies.putObject(cookie_id, $scope.channels);
    };
    
    $scope.addChannel = function() {
        var channel = {
            name: this.name,
            url: this.url
        };
        
        $scope.channels.push(channel);
        this.name = '';
        this.url = '';
        
        $cookies.putObject(cookie_id, $scope.channels);
        
        if($scope.channels.length === 1) {
            $rootScope.selectedChannel = channel;
        }
    };
});
