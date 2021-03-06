(function() {

    var app = angular.module('APIApp', []);

    app.controller('apiController', ['$http', function($http) {

        var app = this;

        app.makeCall = function() {

            var Query = document.getElementById("input-id").value;

            $http({
                    url: Query,
                    dataType: "jsonp",
                    jsonp: "callback"
                })
                .success(function(json) {

                    console.log(json);

                });
        };
    }]);

})();
