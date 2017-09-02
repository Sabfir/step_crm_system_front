var app = angular.module('myApp',[]);
var url = 'http://localhost:8080/step_srm_system/addresses';
app.controller('newAdressontroller', function ($scope, $http) {
	$scope.adresess = [];
	$scope.newAddress = {};

	//get
	$http.get(url).success(function(response) {
		$scope.adresess = response;
    });

   //  $scope.adresess[0] = {
			// "country": "UA",
			// "region": "Kievska",
			// "city": "Boyarka"
			// };
	
	//post
	$scope.send = function(newAddress){
		var req = {
            "country" : $scope.newAddress.country,
            "region" : $scope.newAddress.region,
            "city" : $scope.newAddress.city,
			"street" : $scope.newAddress.street
        };
        console.log(req);

		$http.post(url, req).then(function success (response) {
			console.log(response.data);
			$scope.adresess.push(response.data);
		});
	}
});