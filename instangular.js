(function () {
    'use strict';

    angular.module('instangular', [])
        .factory('instangular', ['$http',
            function ($http) {


                function request(options) {
                    var baseurl = "https://api.instagram.com/v1/";
                    var clientid = "";

                    options = options || {};
                    options.data = options.data || {};
                    options.data.access_token = localStorage.getItem('instagram_access_token');
                    options.data.callback = "JSON_CALLBACK";


                    var queryString = serializeParams(options.data);

                    var endPoint = baseurl + options.url + "?" + queryString;


                    $http.jsonp(endPoint).success(function (response) {
                        options.success(response.data);
                    });
                }

                function serializeParams(obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                    }
                    return str.join('&');
                }


                return {
                    selfprofile: function (callback) {
                        request({
                            url: "users/self",
                            success: callback
                        });
                    },
                    profile: function (id, callback) {
                        request({
                            url: "users/" + id + "/",
                            success: callback
                        });
                    },
                    follows: function (id, callback) {
                        request({
                            url: "users/" + id + "/follows",
                            success: callback
                        });
                    },
                    followedby: function (id, callback) {
                        request({
                            url: "users/" + id + "/followed-by",
                            success: callback
                        });
                    },
                    usermedia: function (id, callback) {
                        request({
                            url: "users/" + id + "/media/recent/",
                            success: callback
                        });
                    },
                    media: function (id,callback) {
                        request({
                            url:"media/"+id,
                            success:callback
                        });
                    },
                    locationsearch: function (options, callback) {
                        request({
                            url: "locations/search",
                            data: options,
                            success: callback
                        });

                    },
                    locationmedia: function (id, callback) {
                        request({
                            url: "locations/" + id + "/media/recent",
                            success: callback
                        });
                    }

                }

}]);

})();