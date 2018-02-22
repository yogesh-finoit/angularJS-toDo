angular.module('home')
    .controller('toDoController', ['$scope', function ($scope) {
        /**
         * todo list array 
         */
        $scope.todoList = [{ todoText: 'Books', isSelected: false }];
        /**
         * to add todo in the todoList array
         */
        $scope.addInList = function () {
            $scope.todoList.push({ todoText: $scope.todoInput, isSelected: false });
            $scope.todoInput = "";
        };
        /**
         * to select all todos
         */
        $scope.selectAllToDo = function () {
            angular.forEach($scope.todoList, function (x) {
                if (!x.isSelected) {
                    x.isSelected = true;
                }
            })
        }
        /**
         * remove todo from the list
         */
        $scope.removeToDo = function () {
            var createCopy = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(createCopy, function (x) {
                if (!x.isSelected) $scope.todoList.push(x);
            });
        };
    }])