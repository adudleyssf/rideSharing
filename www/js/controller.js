angular.module('starter.controllers', [])
    .controller('LoginCoachCtrl', ['$scope', '$state', 'coachService', '$ionicHistory', "$window",
        function($scope, $state, coachService, $ionicHistory, $window) {
            $scope.coaches = {};
            $scope.coaches.email = "";
            $scope.coaches.password = "";
            $scope.loginSubmitForm = function(form) {
                if (form.$valid) {
                    coachService.login($scope.coaches)
                        .then(function(response) {
                            if (response.status === 200) {
                                console.log(response);
                                $scope.isCoach;
                                $window.localStorage["isCoach"] = true;
                                $window.localStorage["userID"] = response.data.userId;
                                $window.localStorage['token'] = response.data.id;
                                //Should return a token
                                console.log(response);
                                $ionicHistory.nextViewOptions({
                                    historyRoot: true,
                                    disableBack: true
                                });
                                $state.go('lobbyC');
                            }
                            else {
                                // invalid response
                                alert("Something went wrong, try again.");
                            }
                        }, function(response) {
                            // Code 401 corresponds to Unauthorized access, in this case, the email/password combination was incorrect.
                            if (response.status === 401) {
                                alert("Incorrect username or password");
                            }
                            else if (response.data === null) {
                                //If the data is null, it means there is no internet connection.
                                alert("The connection with the server was unsuccessful, check your internet connection and try again later.");
                            }
                            else {
                                alert("Something went wrong, try again.");
                            }
                        });
                }
            };
        }
    ])
.controller('LoginPlayerCtrl', ['$scope', '$state', 'playerService', '$ionicHistory', "$window",
    function($scope, $state, playerService, $ionicHistory, $window) {
        $scope.players = {};
        $scope.players.email = "";
        $scope.players.password = "";
        $scope.loginSubmitForm = function(form) {
            if (form.$valid) {
                playerService.login($scope.players)
                    .then(function(response) {
                        if (response.status === 200) {
                            //Should return a token
                            console.log(response);
                            $window.localStorage["isCoach"] = false;
                            $window.localStorage["userID"] = response.data.userId;
                            $window.localStorage['token'] = response.data.id;
                            $ionicHistory.nextViewOptions({
                                historyRoot: true,
                                disableBack: true
                            });
                            $state.go('lobbyP');
                        }
                        else {
                            // invalid response
                            alert("Something went wrong, try again.");
                        }
                    }, function(response) {
                        // Code 401 corresponds to Unauthorized access, in this case, the email/password combination was incorrect.
                        if (response.status === 401) {
                            alert("Incorrect username or password");
                        }
                        else if (response.data === null) {
                            //If the data is null, it means there is no internet connection.
                            alert("The connection with the server was unsuccessful, check your internet connection and try again later.");
                        }
                        else {
                            alert("Something went wrong, try again.");
                        }
                    });
            }
        };
    }
])

.controller('RegisterPlayerCtrl', ['$scope', '$state', 'playerService', '$ionicHistory', "$window",
    function($scope, $state, playerService, $ionicHistory, $window) {
        $scope.players = {};
        $scope.comparePassword = {};
        $scope.registerSubmitForm = function(form) {
            if (form.$valid) {
                if ($scope.players.password === $scope.comparePassword.password) {
                    playerService.create($scope.players)
                        .then(function(response) {
                            if (response.status === 200) {
                                $ionicHistory.nextViewOptions({
                                    historyRoot: true,
                                    disableBack: true
                                });
                                $state.go('loginP');
                                form.$setPristine();
                            }
                            else if (response.status === 401) {
                                alert("passwords don't match");
                            }
                            else if (response.data === null) {
                                //If the data is null, it means there is no internet connection.
                                alert("No internet connection, check connection");
                            }
                            else if (response.status === 422) {
                                alert("Email already in use");
                            }
                            else {
                                alert("Something went wrong try again");
                            }
                        }, function(error) {
                            console.log(error);
                            if (error.status === 422) {
                                alert("Email already in use");
                            }
                        });
                }
            }

        };
    }
])

.controller('RegisterCoachCtrl', ['$scope', '$state', 'coachService', '$ionicHistory', '$window',
    function($scope, $state, coachService, $ionicHistory, $window) {

        $scope.coaches = {};
        $scope.comparePassword = {};
        $scope.registerSubmitForm = function(form) {
            if (form.$valid) {
                if ($scope.coaches.password === $scope.comparePassword.password) {
                    coachService.create($scope.coaches)
                        .then(function(response) {
                            if (response.status === 200) {
                                $ionicHistory.nextViewOptions({
                                    historyRoot: true,
                                    disableBack: true

                                });
                                $state.go('loginC');
                                form.$setPristine();
                            }
                            else if (response.status === 401) {
                                alert("passwords don't match");
                            }
                            else if (response.data === null) {
                                //If the data is null, it means there is no internet connection.
                                alert("No internet connection, check connection");
                            }
                            else if (response.status === 422) {
                                alert("Email already in use");
                            }
                            else {
                                alert("Something went wrong try again");
                            }
                        }, function(error) {
                            console.log(error);
                            if (error.status === 422) {
                                alert("Email already in use");
                            }
                        });
                }
            }
        };
    }
])

.controller('LobbyPlayerCtrl', ['$scope', '$state', '$ionicHistory', 'playerService', '$window',
    function($scope, $state, $ionicHistory, playerService, $window) {
        $scope.logout = function() {
            playerService.logout($window.localStorage.token)
                .then(function(response) {
                    //The successful code for logout is 204
                    if (response.status === 204) {
                        $ionicHistory.nextViewOptions({
                            historyRoot: true,
                            disableBack: true
                        });
                        $state.go('landing');
                    }
                    else {
                        alert("Could not logout at this moment, try again.");
                    }
                }, function(response) {
                    alert("Could not logout at this moment, try again.");
                });
        };
    }
])

.controller('LobbyCoachCtrl', ['$scope', '$state', '$ionicHistory', 'coachService', '$window', "JoinTeamsService",
    function($scope, $state, $ionicHistory, coachService, $window, JoinTeamsService) {
        // $scope.games = [{
        //     opponent: 'bishops',
        //     date: "Fri Mar 11 2016",
        //     time: "10:38",
        //     where: "Home"
        // }, {
        //     opponent: 'bishops',
        //     date: "Fri Mar 11 2016",
        //     time: "10:38",
        //     where: "Home"
        // }, {
        //     opponent: 'bishops',
        //     date: "Fri Mar 11 2016",
        //     time: "10:38",
        //     where: "Home"
        // }, {
        //     opponent: 'bishops',
        //     date: "Fri Mar 11 2016",
        //     time: "10:38",
        //     where: "Home"
        // }, {
        //     opponent: 'bishops',
        //     date: "Fri Mar 11 2016",
        //     time: "10:38",
        //     where: "Home"
        // }];

        $scope.games;
        $scope.logout = function() {


            coachService.logout($window.localStorage.token)

            .then(function(response) {

                //The successful code for logout is 204
                if (response.status === 204) {
                    $ionicHistory.nextViewOptions({
                        historyRoot: true,
                        disableBack: true
                    });
                    $state.go('landing');
                }
                else {
                    alert("Could not logout at this moment, try again.");
                }
            });

        };
    }
])

.controller("MakeGameCtrl", ['$scope', '$state', '$ionicHistory', '$window', "storeGames",
    function($scope, $state, $ionicHistory, $window, storeGames) {
        $scope.games = {};

        // $scope.addGame = function() {
        //     $scope.games.push({
        //         opponent: $scope.opponent,
        //         date: $scope.date,
        //         time: $scope.time,
        //         where: $scope.where
        //     });
        //     $scope.opponent = "";
        //     $scope.date = "";
        //     $scope.time = "";
        //     $scope.where = "";

        // };

        $scope.savegame = function() {
            storeGames.saveGame($scope.games);

            storeGames.create($scope.games);
            if ($window.localStorage.isCoach == "true") {
                $state.go("lobbyC");
            }
            else if ($window.localStorage.isCoach == "false") {
                $state.go("lobbyP");
            }
        };
    }
])

.controller("JoinTeamCtrl", ['$scope', '$state', '$ionicHistory', '$window', "JoinTeamsService",
    function($scope, $state, $ionicHistory, $window, JoinTeamsService) {

        $scope.join = {};

        $scope.joinTeam = function(form) {
            if (form.$valid) {

                $scope.join.userId = $window.localStorage["userID"];
                JoinTeamsService.joinTeams($scope.join);
                $state.go("lobbyC");
                $ionicHistory.nextViewOptions({
                    historyRoot: true,
                    disableBack: true
                });
            }
            else {
                alert("form not valid.");
            }

        };
    }
]);
