angular.module('home', ['constants'])

    .config(['$stateProvider', 'HOME_DIRECTORY_URL', function ($stateProvider, HOME_DIRECTORY_URL) {
        var homePath = HOME_DIRECTORY_URL + 'home/templates/';
        $stateProvider
            .state('userMainHome', {
                abstract: true,
                url: '', //@ if it is parent state then we can avoid url, because parent state never runs
                templateUrl: homePath + "home-tpl.html",
            })
            .state('userMainHome.todo', {
                url: '/',
                views: {
                    "": {
                        templateUrl: homePath + 'todo-tpl.html',
                        controller: 'toDoController'
                    }
                }
            })

    }])