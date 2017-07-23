app.directive('infoButton', function () {
   return {
      restrict: 'E',
	  scope: {
		  source: '='
	  },
	  templateUrl: 'scripts/directive/infoButton.html',
	  link : function (scope, element, attr) {
		  //scope.showMe = false;
		  scope.display = function () {
			  scope.showMe = !scope.showMe;
			  if (!scope.showMe) {
				  scope.title = "Hide";
				  $(".dont_show").show();
			  } else {
				  scope.title = "show";
				  $(".dont_show").hide();
			  }
		  }
	  }
   };
});