var RegisterServices = angular.module('RegisterServices', []);
RegisterServices.factory('Data', function() {
	var DataObj = {
		account: "",
		name: "",
		sex: 1,
		password: "",
		home: ""
	};
	return {
		getData: function() {
			return DataObj;
		},
		resetData: function() {
			DataObj = {
				account: "",
				name: "",
				sex: 1,
				password: "",
				home: ""
			};
		}
	}
});