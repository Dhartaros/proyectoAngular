(function(){
	var app = angular.module('store-products', []);
	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	app.directive('productDescription', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});
	app.directive("productSpecs", function() {
		return {
			restrict:"A",
			templateUrl: "product-specs.html"
		};
	});
	app.directive("productReviews", function() {
		return {
			restrict: 'E',
			templateUrl: "product-reviews.html"
		};
	});
	app.directive('productTabs', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function() {
				this.tab = 1;
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'tab'
		};
	});
	app.directive('productGallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function() {
				this.current = 0;
				this.setCurrent = function(newValue){
					this.current = newValue || 0;
				};
			},
			controllerAs: 'gallery'
		};
	});
})();