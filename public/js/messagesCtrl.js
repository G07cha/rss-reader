/*global app*/
/* global app */

app.controller('messagesCtrl', ['FeedService', '$scope', '$rootScope', 
function(Feed, $scope, $rootScope) {
    $scope.messages = [];
    
    $rootScope.$watch('selectedChannel', function(channel) {
        if(channel) {
            Feed.parseFeed(channel.url)
            .then(function(res) {
                var newMessages = [];
                var authors = [];
                res.data.responseData.feed.entries.forEach(function(message) {
                    if(message.title == message.contentSnippet) {
                        message.contentSnippet = '';
                    }
                    if(message.author && authors.indexOf(message.author) === -1) {
                        authors.push(message.author);
                    } 
                    newMessages.push(message);
                });
                
                $scope.messages = newMessages;
                $scope.authorsCount = authors.length;
                $scope.messagesCount = res.data.responseData.feed.entries.length;
            });
        }
    });
    
    $scope.analyzeMessage = function(message) {
        $rootScope.selectedMessage = message;
    };
}]);