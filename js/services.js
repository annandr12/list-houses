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
		var editHouse = function (editedHouse){
			var houses = getHouses();
			for(var i=0; i<houses.length; i++){
				if(editedHouse.uuid === houses[i].uuid){
					houses[i] = editedHouse;
					console.log(i);
					console.log(houses[i]);
				}
			}
			console.log(houses);
			setHouses(houses);
		}

		return {
			getHouses: getHouses,
			setHouses: setHouses,
			editHouse: editHouse
		}

	});