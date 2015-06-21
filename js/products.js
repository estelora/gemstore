// wrap our first new dependency module in a nice closure
(function() {

  // declare the new product module here, important to remember
  var app = angular.module('store-products', [ ]);

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

})();


