var app = angular.module('myApp', ['ngGrid']);

app.controller('MyCtrl', function($scope,$http) {
  
    $http.get('users.json').success(function(data) {
        $scope.persons = data;
    });

    $scope.gridOptions = { data: 'persons',
      columnDefs: [
	  {field: 'id', displayName: 'ID'},
      {field: 'name', displayName: 'Name'},
      {field: 'url', displayName: 'Url'}
      ]
    };
});