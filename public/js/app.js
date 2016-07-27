var myRegister=angular.module('myRegister', 
['ui.router','RegisterCtrls','RegisterServices']);
myRegister.config(function($stateProvider, $urlRouterProvider) {
  //
  // 设置默认路由
  $urlRouterProvider.otherwise("/step1");
  //
  // 设置状态下的路由
  $stateProvider
    .state('step1', {
      url: "/step1",
      controller: 'stepCtrl1',
      templateUrl: "partials/step1.html"
    })
    .state('step2', {
      url: "/step2",
      controller: 'stepCtrl2',
      templateUrl: "partials/step2.html"
    })
    .state('step3', {
      url: "/step3",
      controller: 'stepCtrl3',
      templateUrl: "partials/step3.html"
    })
    .state('confirm', {
      url: "/confirm",
      controller: 'Confirm',
      templateUrl: "partials/confirm.html"
    });
});