var app = angular.module('MyApp', []);
//app.controller("BookStore", function ($scope) {
//    $scope.items = [
//        { ISBN: "5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20 },
//        { ISBN: "4352134", Name: "AngularJS", Price: 450, Quantity: 25 },
//        { ISBN: "2460932", Name: "Javascript", Price: 180, Quantity: 15 }
//    ];
//});


app.controller("BookStore", function ($scope) {
    $scope.items = [
        { question: 'What is your name', Id: 1, Answer: [{ id: 1, option: "212 555-1234" }, { id: 2, option: "212 555-555" }] },
        { question: 'What is your name1', Id: 1, Answer: [{ id: 1, option: "212 555-3333" }, { id: 2, option: "212 555-444" }] },
         { question: 'What is your name2', Id: 1, Answer: [{ id: 1, option: "212 555-3333" }, { id: 2, option: "212 555-444" }] }
    ];
});


