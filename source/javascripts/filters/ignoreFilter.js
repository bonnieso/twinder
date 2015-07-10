'use strict';

angular.module('sif')
.filter('ignoreFilter', function() {
  return function(users, ignoredPeeps) {
    var filteredUsers = {};
    angular.forEach(users, function(userData, screenName) {
      if (ignoredPeeps.indexOf(screenName) === -1) {
        filteredUsers[screenName] = userData;
      }
    });
    return filteredUsers;
  };
});