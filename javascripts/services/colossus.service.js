(function(){
	'use strict';
	
	angular
		.module('colossus')
		.factory('colossusService', colossusService);
		
	colossusService.$inject = ['$http'];
	
	function colossusService($http){
		
		var service = {
			'getPools' : getPools,
			'poolDetail' : poolDetail
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
	}

	
})();