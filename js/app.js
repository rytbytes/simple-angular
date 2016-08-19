var clientApp = angular.module('ClientManager', [
  'ClientManager.controllers',
  'ngRoute'
]);

clientApp.config(function($locationProvider,$routeProvider){
	$routeProvider

	//new client form
	.when('/new_client', {
            templateUrl : 'new_client.html',
            controller  : 'newclientController'
        })

	//edit client form
	.when("/edit_client/", {
			templateUrl: "edit_client.html",
			controller: "editclientController"
		})
});
