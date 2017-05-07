app.directive('appInfo', function () {
	return {
		restrict : 'E',
		scope: {
			info : '='
	},
	templateUrl : 'scripts/directive/appInfo.html'
	   }
});