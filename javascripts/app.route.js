(function(){
	'use strict';
	
	angular
		.module('colossus')
		.config(config);
		
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider){
		$routeProvider.when('/', {
			controller: 'poollistController',
			controllerAs: 'colossus',
			templateUrl: './poollist.html'
		}).when('/:poolId', {
			controller: 'poolDetailController',
			controllerAs: 'colossus',
			templateUrl: './pooldetail.html'
		}).otherwise('/');
	}
})();