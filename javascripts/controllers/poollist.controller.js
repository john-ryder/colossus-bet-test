(function(){
	'use strict';
	
	angular
		.module('colossus')
		.controller('poollistController', poollistController);
		
	poollistController.$inject = ['$scope', 'colossusService'];
		
	function poollistController($scope, colossusService){
		var vm = this;
		vm.poolList = [];
				
		activate();
		
		function activate(){
			getPools();
		}
		
		function getPools(){
			colossusService.getPools()
				.then(function(response){
					vm.poolList = response.data;
				}, function(error) {
					console.log('error retrieving pool list', error);
				});
		}		
	}
	
})();