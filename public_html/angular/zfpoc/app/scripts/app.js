'use strict';

/**
 * @ngdoc overview
 * @name zafinNbsApp
 * @description
 * # zafinNbsApp
 *
 * Main module of the application.
 */
angular
  .module('zafinNbsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Default', {
        templateUrl: 'views/default.html',
        controller: 'DefaultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
