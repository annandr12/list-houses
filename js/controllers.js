'use strict';

/* Controllers */

var housesControllers = angular.module('housesControllers', []);

/*	var houses = [
	    {'uuid': "b35ec271-1a0c-b0e0-40a2",
	    'name': 'House 1', 
	    'rooms': '20',
	    'floors': '4',
	    'prise':'1000',
	   'materials': ['1','2','3','4'],
		'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
	    {'uuid': "b55ec271-1a0c-b3e0-40a2",
	    'name': 'House 2', 
	    'rooms': '23',
	    'floors': '4',
	    'prise':'1000',
	    'materials': ['1','2','3','4'],
		'description': 't enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
	    {'uuid': "b35ec275-1a0a-b0e0-40a2",
	    'name': 'House 3', 
	    'rooms': '55',
	    'floors': '4',
	    'prise':'1000',
	    'materials': ['1','2','3','4'],
		'description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
	    {'uuid': "b35ec271-1u0c-b2e0-40a2",
	    'name': 'House 4', 
	    'rooms': '2',
	    'floors': '666',
	    'prise':'1000',
	    'materials': ['1','2','3','4'],
		'description': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
	  	];
	  	localStorage.setItem('houses', JSON.stringify(houses));*/

housesControllers.controller('housesListCtrl', function ($scope, housesService) {
	$scope.houses = housesService.getHouses();
	//$scope.mat = ['Бумага','Жесть','Дерево','Кирпич'];

/*	for (var index = 0; index < materials.length; ++index) {
		if($scope.houses.material[index])
			$scope.materials.push(mat[index]);
	}*/
  	$scope.predicate = '';
});
housesControllers.controller('housesAddModal', function ($scope, ngDialog, housesService)  {
	var mater = ['Бумага','Жесть','Дерево','Кирпич'];
	var identify = ['1','2','3','4'];
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4();
	}
    $scope.openModalWin = function () {
        ngDialog.open({
            template: 'modalAddHouse',
            className: 'ngdialog-theme-default'
        });
    };
    $scope.addHouse = function(a){
    	var array = housesService.getHouses();
    	a.uuid = guid();
    	array.push(a);
    	housesService.setHouses();
    	ngDialog.close();
    };
});

housesControllers.controller('housesDeleteModal', function ($scope, ngDialog)  {
	$scope.openDefaultModal = function () {
        ngDialog.open({
            template: 'modalDeleteHouse',
            //plain: true,
            controller: function($scope) {
				/*console.log($scope.data);*/
            },
            scope: $scope,
            className: 'ngdialog-theme-default'
        });
    };
    $scope.deleteHouse = function(uuid) {
    	var saved = localStorage.getItem('houses');
    	saved =  JSON.parse(saved);
    	var k;
    	for(var i=0; i<saved.length;i++){
    		if(saved[i].uuid ==uuid){
    			k=i;
    		}
    	}
    	saved.splice (k, k);
    	console.log(k);
    	localStorage.setItem('houses', JSON.stringify(saved));
    	ngDialog.close(); 
    }
    
});