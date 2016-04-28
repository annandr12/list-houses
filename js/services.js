'use strict';

angular.module('housesServices', [])
	.factory('housesService', function() {
		var arrayHouses = [];

		var getHouses = function (){
			if (arrayHouses.length === 0) {
			    var saved = localStorage.getItem('houses');
			    if (saved) {
			    	arrayHouses = JSON.parse(saved);
			    }
			}
			return arrayHouses;
		}

		var setHouses = function (newArrayHouses){
			if (!newArrayHouses) {
				newArrayHouses = arrayHouses;
			}
			localStorage.setItem('houses', JSON.stringify(newArrayHouses));
		}

		return {
			getHouses: getHouses,
			setHouses: setHouses
		}

	});