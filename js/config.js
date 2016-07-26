app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('listagem', {
		url:"/listagem",
		templateUrl: "listagem_lugares.html"
	})

	$urlRouterProvider.otherwise('listagem');

});