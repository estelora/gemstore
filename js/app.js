(function(){

var app = angular.module('store', [ ]);


// Controllers are where we define the app's bx with functions and values

app.controller('StoreController', function(){
	this.products = gems;

});

app.controller("PanelController", function(){
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