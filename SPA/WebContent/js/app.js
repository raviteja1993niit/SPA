/**
 * Angular Module
 */
var app=angular.module("app",['ngRoute'])//add ngRoute module
app.config(function($routeProvider){//$routeProvider is a service which is defined in ngRoute
	$routeProvider
	.when('/getemployees',{controller:'EmployeeCtrl',templateUrl:'views/employees.html'})
	.when('/getdepartments',{controller:'DeptCtrl',templateUrl:'views/departments.html'})
	.when('/getstudents',{controller:'StudentCtrl',templateUrl:'views/students.html'})
	.otherwise({templateUrl:'views/defaultpage.html'})
})