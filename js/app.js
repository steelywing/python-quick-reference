var app = angular.module('app', ['ngRoute']);

app.config(
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when(':url*', {
                templateUrl: function(path) {
                    return path.url;
                }
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
    function($rootScope, $location, $http) {
        $rootScope.view = function(url, anchor) {
            if (url) {
                $location.path(url);
            }
            
            if (anchor) {
                $location.hash(anchor);
            }
        };
        
        $rootScope.pages = {};
        $http.get('pages.json').success(function(data) {
            $rootScope.pages = data;
        });

        $rootScope.$on('$viewContentLoaded', function(e) {
            var url = $location.path();
            angular.forEach($rootScope.pages, function(page) {
                if (page.url == url) {
                    page.toc = $('[ng-view]')
                        .children('h1, h2, h3, h4')
                        .map(function() {
                            return {
                                title: $(this).text(),
                                id: this.id
                            };
                        })
                        .get();
                }
            });
        });
    }
);
