var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-blog-0y4o.onrender.com/postagem').
      success(function(data) {
          $scope.postagem = data;
        console.log(data);         }
  );
});


angular.module('blogMax', []);
angular.module('blogMax').controller('RestMax', function ($scope, $http){

  function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
    }
    var ident = getParameter('ident');
    console.log(ident);
    urlink = "https://api-blog-0y4o.onrender.com/postagem/"+ident;
    console.log(urlink);

    $http.get(`${urlink}`).
    success(function(data) {
      console.log(data);
        $scope.postagem = data;
    }
);

});