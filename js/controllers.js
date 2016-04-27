'use strict';

/* Controllers */

var housesControllers = angular.module('housesControllers', [])
	.directive('myHouse', function(){
		return {
			restrict: "E",
			scope: {
				data: "=",
				param: "="
			},
			templateUrl: '../templates/my-house.html',
			controller: ['$scope', function($scope) {

    		}],

		}
	})
	.directive('addHouse', function(){
		return {
			restrict: "E",
			scope: false,
			controller: 'housesAddModal',
			templateUrl: '../templates/add-house.html'
		}
	});

/*	var houses = [
	    {'name': 'House 1', 
	    'rooms': '20',
	    'floors': '4',
	    'prise':'1000',
	   'materials': ['1','2','3','4'],
		'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
	    {'name': 'House 2', 
	    'rooms': '23',
	    'floors': '4',
	    'prise':'1000',
	    'materials': ['1','2','3','4'],
		'description': 't enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
	    {'name': 'House 3', 
	    'rooms': '55',
	    'floors': '4',
	    'prise':'1000',
	    'materials': ['1','2','3','4'],
		'description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
	    {'name': 'House 4', 
	    'rooms': '2',
	    'floors': '666',
	    'prise':'1000',
	    'materials': ['1','2','3','4'],
		'description': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
	  	];
	  	localStorage.setItem('houses', JSON.stringify(houses));*/

housesControllers.controller('housesListCtrl', function ($scope) {
	var saved = localStorage.getItem('houses');
	$scope.houses = JSON.parse(saved);
	$scope.mat = ['Бумага','Жесть','Дерево','Кирпич'];

/*	for (var index = 0; index < materials.length; ++index) {
		if($scope.houses.material[index])
			$scope.materials.push(mat[index]);
	}*/
  	$scope.predicate = '';
});
housesControllers.controller('housesAddModal', function ($scope, $rootScope, ngDialog, $timeout)  {
	var mater = ['Бумага','Жесть','Дерево','Кирпич'];
	var identify = ['1','2','3','4'];
	$scope.todos = localStorage.getItem('houses');
	$scope.addItem = function(house){
	}
    $scope.openModalWin = function () {
        ngDialog.open({
            template: 'modalAddHouse',
            controller: 'InsideCtrl',
            className: 'ngdialog-theme-default'
        });
    };
    $scope.addHouse = function(a){
    	console.log(a);
    	var saved = localStorage.getItem('houses');
    	var array = JSON.parse(saved);

    	array.push(a);
    	localStorage.setItem('houses', JSON.stringify(array));
    	console.log(array);
    	/*console.log(mat);
    	var materials = [];
    	for(var i=0; i<4; i++){
    		if(in_array(identify[i],mat)){
    			materials.push({i})
    		}
    	}*/
    };
});
housesControllers.controller('InsideCtrl', function ($scope, ngDialog) {
    $scope.dialogModel = {
        message : 'message from passed scope'
    };
    
});