var RegisterCtrls = angular.module('RegisterCtrls', ['ui.router']);
myRegister.controller('stepCtrl1', ['$scope', '$state', 'Data', function($scope, $state, Data) {
	$scope.account = Data.getData().account;
	$scope.name = Data.getData().name;
	$scope.sex = Data.getData().sex;
	$scope.Step = function() {
		Data.getData().account = $scope.account;
		Data.getData().name = $scope.name;
		Data.getData().sex = $scope.sex;
		$state.go("step2");
	};
}]);
myRegister.controller('stepCtrl2', ['$scope', '$state', 'Data', function($scope, $state, Data) {
	$scope.password = Data.getData().password;
	$scope.Step = function() {
		Data.getData().password = $scope.password;
		$state.go("step3");
	};
}]);
myRegister.controller('stepCtrl3', ['$scope', '$state', 'Data', function($scope, $state, Data) {
	$scope.home = Data.getData().home;
	$scope.Step = function() {
		Data.getData().home = $scope.home;
		$state.go("confirm");
	}
}]);
myRegister.controller('Confirm',['$scope', '$state','$http' ,'Data', function($scope,$state,$http, Data) {
	$scope.info = Data.getData();
	$scope.info.sex = getSexName(Data.getData().sex);
	function getSexName(a) {
		return a == 1 ? "男" : "女";
	}
	$scope.commit = function() {
		$http({
			method: 'POST',
			url: 'users/addUser',
			data: Data.getData(),
		}).success(function(data, status, headers, config) {
			alert("提交成功");
			Data.resetData();
			$state.go("step1");
		}).error(function(data, status, headers, config) {
			console.log(status);
		});
	}
}]);