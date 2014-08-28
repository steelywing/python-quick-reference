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
    function($rootScope, $location, $http, $templateCache) {
        $rootScope.view = function(url, anchor) {
            if (url) {
                $location.path(url);
            }
            
            if (anchor) {
                $location.hash(anchor);
            }
        };
        
        $http.get('index.json').success(function(data) {
            $rootScope.pages = data;
            angular.forEach(data, function(page) {
                var $dom = $(page.content);
                // console.log(dom);
                $templateCache.put(page.url, page.content);
                page.toc = $dom
                    .filter('h1, h2, h3, h4')
                    .map(function() {
                        return {
                            title: $(this).text(),
                            id: this.id
                        };
                    })
                    .get();
            });
        });
    }
);
