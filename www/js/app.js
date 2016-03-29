// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ["ionic", "starter.controllers", "RESTConnection", "joinTeamModule"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: 'templates/landing.html',
  })
  .state('loginC', {
    url: '/loginC',
    templateUrl: 'templates/loginC.html',
    controller: "LoginCoachCtrl"
  })
   .state('loginP', {
    url: '/loginP',
    templateUrl: 'templates/loginP.html',
    controller: "LoginPlayerCtrl"
  })
   .state('userSelectR', {
    url: '/userSelectR',
    templateUrl: 'templates/userSelectR.html',
  })
   .state('userSelectL', {
    url: '/userSelectL',
    templateUrl: 'templates/userSelectL.html',
  })
  .state('registerPlayer', {
    url: '/registerPlayer',
    templateUrl: 'templates/registerPlayer.html',
    controller: "RegisterPlayerCtrl"
  })
   .state('registerCoach', {
    url: '/registerCoach',
    templateUrl: 'templates/registerCoach.html',
    controller: "RegisterCoachCtrl",
  })
   .state('makeTeam', {
    url: '/makeTeam',
    templateUrl: 'templates/makeTeam.html',
  })
   .state('joinTeam', {
    url: '/joinTeam',
    templateUrl: 'templates/joinTeam.html',
    controller: "JoinTeamCtrl"
  })
    .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
  })
    .state('lobbyC', {
    url: '/lobbyC',
    templateUrl: 'templates/lobbyC.html',
    controller: "LobbyCoachCtrl"
  })
    .state('lobbyP', {
    url: '/lobbyP',
    templateUrl: 'templates/lobbyP.html',
    controller: "LobbyPlayerCtrl"
  })
      .state('makeGame', {
    url: '/makeGame',
    templateUrl: 'templates/makeGame.html',
    controller: 'MakeGameCtrl'
  })
   .state('optionsCoach', {
    url: '/optionsCoach',
    templateUrl: 'templates/optionsCoach.html',
  });
});
