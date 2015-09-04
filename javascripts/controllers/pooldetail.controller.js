(function(){
	'use strict';
	
	angular
		.module('colossus')
		.controller('poolDetailController', poolDetailController);
		
	poolDetailController.$inject = ['$scope', 'colossusService', '$route', '$routeParams'];
	
	function poolDetailController($scope, colossusService, $route, $routeParams){
		var vm = this;
		vm.poolDetail = [];
		vm.selected = {};
		vm.checked = '';
		vm.lines = 0;
		vm.stakeValues = [2.00, 1.00, 0.50, 0.20];
		vm.selectedStake = 0;
		vm.bet = {}
	
		activate();
		
		function activate(){
			getPoolDetail();
		}
						
		vm.getLines = function(){
			vm.lines = 0;
			for(var key in vm.selected.legs){		 
				if(vm.lines == 0){
					vm.lines = Object.keys(vm.selected.legs[key].selections).length;
				}
				else{
					vm.lines *= Object.keys(vm.selected.legs[key].selections).length;
				}
				
			}
			return vm.lines;
		};
		
		vm.submitBet = function(){
			vm.bet.selections = [];
			vm.bet.lines = vm.lines;
			vm.bet.stake = vm.selectedStake;
			for(var key in vm.selected.legs){
				for(var selection in vm.selected.legs[key].selections){
					vm.bet.selections.push(selection);
				}
			}
			
			console.log(vm.bet);
			
			colossusService.makeBet(vm.bet)
				.then(function(response){
					console.log('Success!');
				}, function(error){
					console.log('Error submitting bet:', error);
				})	
		};
	
		function getPoolDetail(){
			var id = $routeParams.poolId;
			colossusService.poolDetail(id)
				.then(function(response){
					vm.poolDetail = response.data;
				}, function (error) {
					console.log('error getting pool detail', error);
				});
		}
	}
	
})();