app.controller('MainController', ['$scope', function ($scope) { 
		$scope.section_title = 'The All Natural Drink';
		$scope.menus = [
		{
			item : 'Home',
			href : 'index.html'
		},
		{
			item : 'Drinks',
			href : 'n_info.html'
		},
		{
			item : 'Keep Up',
			href : 'our_journey.html'
		}
		];
		$scope.photos = [
			{
			image : 'Assets/imgs/honey.jpg',
			plus : '+',
			name : 'Honey'
		},
		{
			image : 'Assets/imgs/cranberries.jpg',
			plus : '+',
			name : 'Cranberries'
		},
		{
			image : 'Assets/imgs/water.jpg',
			plus : '=',
			name : 'Water'
		},
		{
			image : 'Assets/imgs/hon_cran_pak.jpeg',
			plus : '',
			name : 'Finished Product'
		},
		{
			image : 'Assets/imgs/cinnamon.jpg',
			plus : '+',
			name : 'Cinnamon'
		},
		{
			image : 'Assets/imgs/chrysanthemum.jpg',
			plus : '+',
			name : 'Chrysanthemum'
		},
		{
			image : 'Assets/imgs/water.jpg',
			plus : '=',
			name : 'Water'
		},
		{
			image : 'Assets/imgs/cin_chrys_pak.jpeg',
			plus : '',
			name : 'Finished Product'
		}
		];
		/*$scope.icons = [
		{
			img : 'Assets/icons/facebook.png'
		}, 
		{
			img : 'Assets/icons/twitter.png'
		},
		{
			img : 'Assets/icons/linkedin.png'
		},
		{
			img : 'Assets/icons/googleplus.png'
		}
		];*/
		$scope.ind_images = {
			beeyond_logo : "Assets/imgs/beeyond_w.png",
			not_bell : "Assets/icons/not_bell.png"
		};
		$scope.about = "Call Us SIMPLE!!";
		$scope.about_paragraph = "Beeyond Water is made for those who love drinking an all natural product. Beeyond Water is made with only natural ingredients and nothing else!";
		
		/* for testing Angular" */
		$scope.content = {
			heading : "My Portfolio",
			profile_photo : "Assets/imgs/dare.jpg",
			body_content : [
			{
			     img : "Assets/imgs/beeyond_site_2.png",
				 paragraph : "These are the list of skills used:",
				 skill_set : "HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap3",
				 insert : "Assets/icons/HTML5.png"
			},
			{
			     img : "Assets/imgs/mylite.png",
				 paragraph : "These are the list of skills used:",
				 skill_set : "HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap3",
				 insert : "Assets/icons/CSS3.png"
			},
			{
			     img : "Assets/imgs/tonkabi.png",
				 paragraph : "These are the list of skills used:",
				 skill_set : "HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap3",
				 insert : "Assets/icons/jQUERY.png"
			},
			{
			     img : "Assets/imgs/watchmyback.png",
				 paragraph : "These are the list of skills used:",
				 skill_set : "HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap3",
				 insert : "Assets/icons/JavaScript.png"
			}
				 ]
		};
}]);
