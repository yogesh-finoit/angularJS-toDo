angular.module('todoApp',[
	'ui.router',
	'home'
	])
	.config(function($stateProvider,$locationProvider){

		//@ app config gets setup
		//@ third party modules get's setup here 
	
		$locationProvider.hashPrefix('');
	})
	.run(function($rootScope, $state){
		$rootScope.$state = $state;
	})
