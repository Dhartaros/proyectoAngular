(function(){
	/* Inicialización */
	var app = angular.module('store', ['store-products']);
	/* Controladores */
	app.controller('StoreController', ['$http', function($http) {
		var store = this;
		store.products = [];
		$http.get('products.json').success(function(data) {
			store.products = data;
		});
	}]);
	app.controller('ReviewController', function() {
		this.review = {};
		this.addReview = function(product) {
			this.review = { createdOn : Date.now() };
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	/* Directivas store-products*/
	/* Datos products.json*/
})();
