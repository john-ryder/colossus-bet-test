(function(){
	'use strict';
	
	angular
		.module('colossus')
		.factory('colossusService', colossusService);
		
	colossusService.$inject = ['$http'];
	
	function colossusService($http){
		
		var service = {
			'getPools' : getPools,
			'poolDetail' : poolDetail,
			'makeBet': makeBet
		};
		
		return service;	
			
		function getPools(){
			/**
			* Return a list of all pools
			*/	
			return $http.get('https://colossusdevtest.herokuapp.com/api/pools.json');
		}
		
		function poolDetail(id){
			/**
			 * Return detailed information about a given pool
			 */
			 return $http.get('https://colossusdevtest.herokuapp.com/api/pools/' + id + '.json');
		}
		
		function makeBet(bet){
			/**
			 * Pushes completed bet to the server
			 */
			 return $http.post('https://colossusdevtest.herokuapp.com/api/tickets.json', bet);
		}
	}

	
})();