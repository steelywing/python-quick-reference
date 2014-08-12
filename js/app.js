var app = angular.module('app', ['ngRoute']);

app.config(
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when(':url*', {
                templateUrl: function (path) {
                    return path.url;
                },
                controller: 'ViewController'
            })
            .otherwise({
                redirectTo: '/about/'
            });
        
        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');
    }
);

app.run(
    function ($rootScope, $location) {
        $rootScope.view = function (url) {
            $location.path(url);
        };
    }
);

app.controller('SidebarController', function ($scope, $http, $location) {
    $http.get('pages.json').success(function (data) {
        $scope.pages = data;
    });
});

app.controller('ViewController', function ($scope, $route, $routeParams) {
    // $route.current.templateUrl = $routeParams.url;
    
    $scope.$on('$viewContentLoaded', function (e) {
        console.log('loaded', e);
    });
    
    $scope.onload = function () {
        // $('> h1, > h2, > h3, > h4')
    };
});
