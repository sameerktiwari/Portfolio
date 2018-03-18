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
    $scope.pageInfo="This page is developed using AngularJS. It is a example of a Single\n" +
        "          Page application (SPA) where application runs on a single page";
    $scope.fullName="Sameer Kumar Tiwari";
    $scope.email="sameerktiwari@outlook.com";
    $scope.address="HNo. 372A, Gayatri Nagar, Kunraghat, Gorakhpur, Uttar Pradesh - 273008";
});


