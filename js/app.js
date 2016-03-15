(function() {

    var app = angular.module('APIApp', []);

    app.controller('apiController', ['$http', function($http) {

        var app = this;

        app.makeCall = function() {

            var Query = document.getElementById("input-id").value;

            $http({
                    url: "Put your url here",
                    dataType: "jsonp",
                    jsonp: "callback"
                })
                .success(function(json) {

                    console.log(json);

                });
        };
    }]);

})();
