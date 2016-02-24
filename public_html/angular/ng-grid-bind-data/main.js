// main.js
var app = angular.module('myApp', ['ngGrid','ui.bootstrap']);
var cellTemplate='<div class="ngCellText"  data-ng-model="row"><button data-ng-click="updateSelectedRow(row,$event)">Edit</button></div>'

var ctrl=app.controller('MyCtrl', function($scope,$modal) {
	
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { 
      data: 'myData', 
      enableCellSelection: true,
      enableCellEdit: true,
      enableRowSelection: false,
      columnDefs: [{field: 'name', displayName: 'Name', enableCellEdit: true}, 
      {field:'age', displayName:'Age'},
      {field:'',cellTemplate:cellTemplate}   
      ]
    };
    var dialog;
    $scope.updateSelectedRow=function(row){
       $scope.myrow=row.entity;
     var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return row.entity;
        }
      }
    });

    }
    $scope.save=function(){
      console.log($modal);
     $modal.dismiss('cancel');
    }
    
});
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  var name=items.name;
  var age=items.age;
   

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    items.name=name;
    items.age=age;
    $modalInstance.dismiss('cancel');
  };
};