angular.module('redditClone')
.directive('stories', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/stories/stories.html',
    link: function(scope, element, attrs, fn) {
      scope.submitComment = function(postid, comment){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0];
        post.comments.push(
          {
          name: comment.name,
          text: comment.text,
          time: Date.now()
          }
        )

        post.isAddShowing = false;
        post.isShowing = true;
        comment.name = '';
        comment.text = '';
      }
      scope.showComments = function(postid){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0];

        if(post.isShowing === true){
          post.isShowing = false;
        }else{
          post.isShowing = true;
        }
      }
      scope.showAddComment = function(postid){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0];

        if(post.isAddShowing === true){
          post.isAddShowing = false;
        }else{
          post.isAddShowing = true;
        }
      }
      scope.closeComment = function(postid){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0];
        post.isAddShowing = false;
      }
      scope.closeComments = function(postid){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0];
        post.isShowing = false;
      }
      scope.closePost = function(postid){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0];
        scope.submitOff = true;
      }

      scope.upvote = function(postid){

        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0]
        post.rating++;

      }

      scope.downvote = function(postid){
        var post =  scope.posts.filter(function(post){
                      return post.id === postid;
                    })[0]
        post.rating--;
      }
      scope.submitSwitch = function(){
        if(scope.submitOff){
          scope.submitOff = false;
        }else{
          scope.submitOff = true;
        }

      }
    }
  }
});
