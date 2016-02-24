/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.factory('simpleFactory',function(){
    var factory = {};
    var customers = [{name: 'Zest', city: 'Delhi', subject:[{name:'A',code:'A00'},{name:'B',code:'B00'},{name:'C',code:'C00'}] },
                    {name: 'Aan', city: 'Pune', subject:[{name:'A',code:'A00'},{name:'B',code:'B00'},{name:'C',code:'C00'}]},
                    {name: 'Name', city: 'Mum',subject:[{name:'A',code:'A00'},{name:'B',code:'B00'},{name:'C',code:'C00'}]}];  
    factory.getCustomers = function(){
        return customers;
    };
    return factory;
})

var controllers = {};

controllers.mainController = function ($scope,simpleFactory)
                            {
                                $scope.names = [];
                                init();
                                function init(){
                                    $scope.names = simpleFactory.getCustomers();
                                }

                                $scope.roles = ['Student','Employee','Part Time'];  
                            }
                                    
app.controller(controllers);

//app.controller("mainController", function ($scope)
//                    {
//                        $scope.names = [{name: 'Zest', city: 'Delhi', subject:[{name:'A',code:'A00'},{name:'B',code:'B00'},{name:'C',code:'C00'}] },
//                                        {name: 'Aan', city: 'Pune', subject:[{name:'A',code:'A00'},{name:'B',code:'B00'},{name:'C',code:'C00'}]},
//                                        {name: 'Name', city: 'Mum',subject:[{name:'A',code:'A00'},{name:'B',code:'B00'},{name:'C',code:'C00'}]}];  
//                                    
//                        $scope.roles = ['Student','Employee','Part Time'];  
//                    });



//app.config(function($routeProvider){
//    $routeProvider
//            .when('/',{
//                controller: '',
//                templateUrl:''
//            })
//            .otherwise({redirectTo:'/'});
//});