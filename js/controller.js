var app=angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'myctrl',
            templateUrl: 'templates/home.html'
        })
        .when('/about',{
            controller: 'myctrl',
            templateUrl: 'templates/about.html'
        })
        .when('/work',{
            controller: 'myctrl',
            templateUrl: 'templates/work.html'
        })
        .when('/contact',{
            controller: 'myctrl',
            templateUrl: 'templates/contact.html'
        })
        .otherwise({redirectTo: '/'});
});

app.controller('myctrl',function($scope) {
    $scope.name = "Sameer Tiwari";
    $scope.role="Aspiring Software Developer/ Java Developer";
    $scope.firstName="njkfans";
});


