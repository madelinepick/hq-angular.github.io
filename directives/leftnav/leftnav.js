angular.module('redditClone')
.directive('leftNav', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/leftnav/leftnav.html',
    scope: {
      person: '='
    }
  };
});
