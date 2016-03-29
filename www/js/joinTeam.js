angular.module('joinTeamModule', [])
    .service('JoinTeamsService', ["teamsOnService", function(teamsOnService) {
        var service = this;
        var teams = [];
        // service.showTeams = function(serverTeams)
        // {
        //     teams = serverTeams;
        // };
        service.getTeams = function(teamsArray) {

            if (teamsArray !== undefined) {
                teams = teamsArray;
            }
            return teams;

        };
        service.joinTeams = function(teamKey) {
            teamsOnService.join(teamKey);
            teams.push(teamKey);
        };

    }]);