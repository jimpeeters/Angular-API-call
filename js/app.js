(function() {

    var app = angular.module('APIApp', []);

    app.controller('apiController', ['$http', function($http) {

        var engine = this;

        engine.searchFood = function() {

            var Query = document.getElementById("input-id").value;

            $http({
                    url: "",
                    dataType: "jsonp",
                    jsonp: "callback"
                })
                .success(function(json) {

                    console.log(json);

                });
        };
    }]);

})();
