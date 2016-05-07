angular.module('redditClone')
.directive('messages', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/messaging/messaging.html',
    scope: {
      messages: '=',
    },
    controller: function($scope) {
      $scope.showMessage = function(messageid){
        var message =  $scope.messages.filter(function(message){
                      return message.id === messageid;
                    })[0];
        if(message.messageShowing){
          message.messageShowing = false;
        }else {
          message.messageShowing = true;
        }
      }
    }
  };
});
