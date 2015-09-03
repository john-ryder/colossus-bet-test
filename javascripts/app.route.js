(function(){
	'use strict';
	
	angular
		.module('colossus')
		.config(config);
		
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider){
		$routeProvider.when('/', {
			controller: 'colossusController',
			controllerAs: 'colossus',
			templateUrl: 'index.html'
		}).otherwise('/');
	}
});