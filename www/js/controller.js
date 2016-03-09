angular.module('starter.controllers', [])
.controller('LoginCoachCtrl',['$scope', '$state', 'coachService', '$ionicHistory',
function($scope, $state, coachService, $ionicHistory){
    $scope.coach = {};
    $scope.loginSubmitForm = function(form)
    {
        if(form.$valid)
        {  
           coachService.login($scope.coach)
            .then(function(response) {
                if (response.status === 200) {
                    //Should return a token
                    console.log(response);
                    $ionicHistory.nextViewOptions({
                      historyRoot: true,
                      disableBack: true
                    });
                    $state.go('lobby');
                } else {
                    // invalid response
                    alert("Something went wrong, try again.");
                }
            }, function(response) {
                // Code 401 corresponds to Unauthorized access, in this case, the email/password combination was incorrect.
                if(response.status === 401)
                {
                    alert("Incorrect username or password");
                }else if(response.data === null) {
//If the data is null, it means there is no internet connection.
                    alert("The connection with the server was unsuccessful, check your internet connection and try again later.");
                }else {
                    alert("Something went wrong, try again.");
                }
            });
        }
    };
}])

.controller('LoginPlayerCtrl',['$scope', '$state', 'playerService', '$ionicHistory',
function($scope, $state, playerService, $ionicHistory){
    $scope.player = {};
    $scope.loginSubmitForm = function(form)
    {
        if(form.$valid)
        {  
           playerService.login($scope.coach)
            .then(function(response) {
                if (response.status === 200) {
                    //Should return a token
                    console.log(response);
                    $ionicHistory.nextViewOptions({
                      historyRoot: true,
                      disableBack: true
                    });
                    $state.go('lobby');
                } else {
                    // invalid response
                    alert("Something went wrong, try again.");
                }
            }, function(response) {
                // Code 401 corresponds to Unauthorized access, in this case, the email/password combination was incorrect.
                if(response.status === 401)
                {
                    alert("Incorrect username or password");
                }else if(response.data === null) {
//If the data is null, it means there is no internet connection.
                    alert("The connection with the server was unsuccessful, check your internet connection and try again later.");
                }else {
                    alert("Something went wrong, try again.");
                }
            });
        }
    };
}]);