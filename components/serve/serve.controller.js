(function() {

  'use strict';

  angular
    .module('app')
    .controller('serveController', serveController);

    serveController.$inject = ['$scope', '$http'];

    function serveController($scope, $http) {
      $scope.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg";
    }

})();