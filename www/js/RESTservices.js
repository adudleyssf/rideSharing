angular.module('RESTConnection', [])
  .constant('ENDPOINT_URL', 'https://ride-sharing-strongloop-backend-adudleyssf.c9users.io/api/')

.service('coachService', ['$http', 'ENDPOINT_URL',
    function($http, ENDPOINT_URL) {
      var service = this,
        path = 'coaches/';

      function getUrl() {
        return ENDPOINT_URL + path;
      }
      service.create = function(user) {
        return $http.post(getUrl(), user);
      };
      service.login = function(user) {

        return $http.post(getUrl() + "login", user);

      };
      service.logout = function(token) {
        return $http({
          url: getUrl() + "logout",
          method: "POST",
          headers: {
            'Authorization': token
          }
        });
      };

    }

  ])
  .service('playerService', ['$http', 'ENDPOINT_URL',
    function($http, ENDPOINT_URL) {
      var service = this,
        path = 'players/';

      function getUrl() {
        return ENDPOINT_URL + path;
      }
      service.create = function(players) {
        return $http.post(getUrl(), players);
      };
      service.login = function(players) {

        return $http.post(getUrl() + "login", players);
      };
      service.logout = function(token) {
        return $http({
          url: getUrl() + "logout",
          method: "POST",
          headers: {
            'Authorization': token
          }
        });
      };

    }
  ])

.service('storeGames', ['$http', 'ENDPOINT_URL',
  function($http, ENDPOINT_URL) {
    var service = this,
      path = 'Teams/';
       function getUrl() {
    return ENDPOINT_URL + path;
  }
    var game = {
      "opponent": "",
      "date": "",
      "time": "",
      "where": ""
    };
    var games = [];

    service.getGames = function() {
      return games;
    };

    service.saveGame = function(game) {
    
      games.push(game);
      
    };
    service.create = function(save, teamId) {
    return $http({
        // url: getUrl() + "?filter[where][teamId]="+,
        method: "GET",
        data: save,
        
    });
  };

}])

.service('teamsOnService', ['$http', 'ENDPOINT_URL',
function ($http, ENDPOINT_URL) {
  var service = this,
  path = 'teamsOns/';
  function getUrl() {
    return ENDPOINT_URL + path;
  }
  service.join = function(joiningTeam) {
    return $http({
        url: getUrl(),
        method: "POST",
        data: joiningTeam
    });
  };
}]);
