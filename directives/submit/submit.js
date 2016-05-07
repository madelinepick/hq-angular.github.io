angular.module('redditClone')
.directive('submit', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/submit/submit.html',
    link: function(scope, element, attrs, fn) {
      scope.submitSwitch = function(){
        if(scope.submitOff){
          scope.submitOff = false;
        }else{
          scope.submitOff = true;
        }

      }
      scope.submitForm = function(){
      scope.posts.push(
        {
          id: scope.posts[scope.posts.length-1].id +1,
          name: scope.submitName,
          photo: scope.submitPicture,
          description: scope.submitDescription,
          author: scope.submitAuthor,
          time: Date.now(),
          rating: 0,
          comments: []
          }
        )
        scope.submitAuthor ='';
        scope.submitName = '';
        scope.submitPicture = '';
        scope.submitDescription = '';
      }
    }
  }
});
