//wrap in closure for scope when we start to refactor js to be neater
(function() {


		//declare app module, add 'store-prducts' module because 'store' depends on it
		var app = angular.module('store', ['store-products ']);


		// Controllers are where we define the app's bx with functions and values
		app.controller('StoreController', function(){
			this.products = gems;

		});

		/* Adding a hypothetical HTTP service to our store

		app.controller('StoreController', ['$http' function($http){
			
			var gems = this;
      
      //initialize with empty array
			gems.products = [ ];
			
			//use the http get method with a promise
			$http.get('/products.json').success(function(data) {
				gems.products = data;
			});
		
		}]);

		*/



		app.controller("ReviewController", function(){

			this.review = {};

			this.addReview = function(product){
				product.review.push(this.review);
				this.review = {};
			};

		});

		// first directive, templates product information
		// angular take camelCase, html takes came-case for names
		app.directive('productTitle', function(){
			return {
				restrict: 'E',
				templateUrl: 'product-title.html'
			}
		});


		// directive controller
		app.directive('productPanels', function(){

			return {

				restrict: 'E',
				templateUrl: 'product-panels.html',
				controllerAs: 'panels',
		 		// move functionality of a controller inside this directive
		 		
		 		controller: function(){
					//set initial value to 1 for tabs
					this.tab = 1;
					//sets the clicked tab
					this.selectTab = function(setTab) {
						this.tab = setTab;
					};
					//checks if currentTab is correct, boolean
					this.isSelected = function(checkTab) {
						return this.tab === checkTab;
					};
				}

			};


		});

		//array of gems for our store
		var gems = [ 
			// storing our first variable inside the controller
			{ 
				name: 'Dodecahedron',
				price: 2.95,
				description: 'my gem is shiny',
				// add new array of objects
				images: [
					//list of image objects
					//use ng-src directive to put in html
					{
						full: '/ruby-ring.jpeg',
						thumb: '/ruby-thumb.jpeg'

					},
					],
					review: [
					{
						stars: 5,
						body: "It's super shiny, I'm satisfied.",
						author: "gymrat@hotmail.net"
					},
					{
						stars: 1,
						body: "It didn't make me sparkle with joy. :(",
							author: "sadbooboo@aol.com"
						},
						],
				// ng-show example, hide button if false
				canPurchase: true,
			},
			{
				name: 'Pentagonal Gem',
				price: '5.99',
				description: 'Five sides and all are lovely',
				images: [
					//list of image objects
					//use ng-src directive to put in html
					{
						full: '/ruby-stone2.jpeg',
						thumb: '/ruby-thumb2.jpeg'

					},
					], 
					canPurchase: true,
				}
		];

})();
