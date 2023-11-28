angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-blog-0y4o.onrender.com/postagem').
      success(function(data) {
          $scope.postagem = data;
        console.log(data);         }
  );
});
