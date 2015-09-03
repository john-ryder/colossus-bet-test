(function(){
	'use strict';
	
	angular
		.module('colossus')
		.controller('colossusController', colossusController);
		
	colossusController.$inject = ['$scope', 'colossusService']
		
	function colossusController($scope, colossusService){
		var vm = this;
		vm.poolList = [];
		vm.detail = null;
		
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
		
		vm.poolDetail = function(id){
			colossusService.poolDetail(id)
				.then(function(response){
					vm.detail = response.data
				}, function (error) {
					console.log('error getting pool detail', error)
				});
		}
	}
	
})();