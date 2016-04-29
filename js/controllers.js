'use strict';

/* Controllers */

var housesControllers = angular.module('housesControllers', []);

housesControllers.controller('housesListCtrl', ['$scope', 'housesService', function ($scope, housesService) {
	$scope.houses = housesService.getHouses();
  	$scope.predicate = '';
}]);
housesControllers.controller('housesAddModal', ['$scope', 'ngDialog', 'housesService', function ($scope, ngDialog, housesService)  {
	$scope.availableMaterials = [
	{'id': '1', 'name': 'Paper'},
	{'id': '2', 'name': 'Metal'},
	{'id': '3', 'name': 'Wood'},
	{'id': '4', 'name': 'Rock'}
	];

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
            className: 'ngdialog-theme-default',
            controller: function($scope, housesService) {

            	$scope.addHouse = function(a){
			    	var array = housesService.getHouses();
			    	a.uuid = guid();
			    	array.push(a);
			    	housesService.setHouses();
			    	ngDialog.close();
			    };
            }
        });
    };
    
}]);

housesControllers.controller('housesDeleteModal', ['$scope', 'ngDialog', 'housesService', function ($scope, ngDialog, housesService)  {
	$scope.openDefaultModal = function () {
        ngDialog.open({
            template: 'modalDeleteHouse',
            controller: function($scope) {
            },
            scope: $scope,
            className: 'ngdialog-theme-default'
        });
    };
    $scope.deleteHouse = function(uuid) {
    	var array = housesService.getHouses();
    	var k=0;
    	for(var i=0; i<array.length;i++){
    		if(array[i].uuid ==uuid){
    			k=i;
    		}
    	}
    	array.splice (k, 1);
    	console.log(k);
    	housesService.setHouses(array);
    	ngDialog.close(); 
    }
    
}]);

housesControllers.controller('housesEditModal', ['$scope', 'ngDialog', 'housesService', function ($scope, ngDialog, housesService)  {
	$scope.availableMaterials = [
	{'id': '1', 'name': 'Paper'},
	{'id': '2', 'name': 'Metal'},
	{'id': '3', 'name': 'Wood'},
	{'id': '4', 'name': 'Rock'}
	];
	$scope.houses = housesService.getHouses();
	console.log($scope.house);
    $scope.openEditWin = function (data) {
        ngDialog.open({
            template: 'modalAddHouse',
            className: 'ngdialog-theme-default',
            controller: function($scope, housesService) {
            	$scope.house = jQuery.extend(true, {}, data);

            	$scope.addHouse = function(a){
			    	housesService.editHouse(a);
			    	console.log(a);
			    	ngDialog.close();
			    };
            }
        });
    }; 
}]);