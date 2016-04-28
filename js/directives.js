'use strict';

/* Directives */
angular.module('housesDirectives', [])
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
