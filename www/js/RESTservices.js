angular.module('RESTConnection', [])
.constant('ENDPOINT_URL', 'https://ride-sharing-strongloop-backend-adudleyssf.c9users.io/api/')  
.service('coachService', ['$http', 'ENDPOINT_URL',
function ($http, ENDPOINT_URL) {
var service = this,
path = 'coaches/';
function getUrl() {
  return ENDPOINT_URL + path;
}
service.create = function (user) {
  return $http.post(getUrl(), user);
};
service.login = function(user) {
  return $http.post(getUrl()+"login",user);
};
}])

.constant('ENDPOINT_URL', 'https://ride-sharing-strongloop-backend-adudleyssf.c9users.io/api/')
.service('playerService', ['$http', 'ENDPOINT_URL',
function ($http, ENDPOINT_URL) {
var service = this,
path = 'players/';
function getUrl() {
  return ENDPOINT_URL + path;
}
service.create = function (user) {
  return $http.post(getUrl(), user);
};
service.login = function(user) {
  return $http.post(getUrl()+"login",user);
};
}]);