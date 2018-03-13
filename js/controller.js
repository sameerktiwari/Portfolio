var app=angular.module('myapp',[]);

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/',{
//         controller: 'myctrl',
//         templateUrl: 'templates/home.html'
//     })
//     .otherwise({redirectTo: '/'}); 
// });

app.controller('myctrl',function($scope) {
    $scope.name = "Sameer Tiwari";
    $scope.role="Aspiring Software Developer/ Java Developer";
    $scope.firstName="njkfans";
});
