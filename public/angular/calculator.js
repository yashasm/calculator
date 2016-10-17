/**
 * New node file
 */

var mycalc = angular.module("mycalc",[]);

mycalc.controller('calculatorcontroller',['$scope','$http',function($scope,$http){
	$scope.exp = 0;
	$scope.error = false;
	
	$scope.pressed = function(op){
		
		if($scope.error){
			$scope.exp = '';
			$scope.error = false;
		}
		
		if($scope.exp == '0'){
			$scope.exp = '';
		}
		
		if(op == 'C'){
			$scope.exp = '0';
			return;
		}
		
		$scope.exp = $scope.exp + op; 
	};
	
	$scope.evaluteAnswer = function(){
		
		$http({
			  method: 'GET',
			  url: '/ans',
			  params: {expression: $scope.exp} 
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
				if(isNaN(Number("response.data.answer"))){
					$scope.error = true
				}
				
				$scope.exp = response.data.answer;
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
				  $scope.error = false;
				  $scope.exp = 'Invalid input';
			  });		
	};
	
}]);