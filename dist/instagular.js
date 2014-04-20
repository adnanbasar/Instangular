(function() {
  angular.module('instangular', []).factory('instangular', function($http) {
    var Basic, User, result;
    Basic = (function() {
      function Basic() {}

      Basic.prototype.api = '';

      return Basic;

    })();
    User = (function() {
      function User(id) {
        this.id = id;
        this.base = 'https://api.instagram.com/v1/users';
        this.client_id = '2ab3335d58b44b14a37695c3316f0ed0';
        this.token = '227757018.f59def8.824dce507b3f43cf93738f080c3eb915';
      }

      User.prototype.makeRequest = function(path) {
        var request;
        request = $http.get(this.ext, {
          params: {
            access_token: this.token
          }
        });
        return request.then(function(result) {
          return this.feed = result.data;
        });
      };

      User.prototype.getfeed = function() {
        var request;
        request = $http.get(this.base + "/self/feed", {
          params: {
            access_token: this.token
          }
        });
        return request.then(function(result) {
          return this.feed = result.data;
        });
      };

      User.prototype.getInfo = function(id) {
        var request;
        request = $http.get(this.base + ("/" + id), {
          params: {
            access_token: this.token
          }
        });
        return request.then(function(result) {
          return this.info = result.data;
        });
      };

      User.prototype.getMediaRecent = function(id) {
        var request;
        request = $http.get(this.base + ("/" + id + "/media/recent"), {
          params: {
            access_token: this.token
          }
        });
        return request.then(function(result) {
          return this.info = result.data;
        });
      };

      User.prototype.getMediaLiked = function() {
        var request;
        request = $http.get(this.base + "/self/media/liked", {
          params: {
            access_token: this.token
          }
        });
        return request.then(function(result) {
          return this.info = result.data;
        });
      };

      User.prototype.search = function(query) {
        var request;
        request = $http.get(this.base + "/search", {
          params: {
            access_token: this.token,
            q: query
          }
        });
        return request.then(function(result) {
          return this.info = result.data;
        });
      };

      return User;

    })();
    return result = {
      user: {
        feed: function() {
          return new User().getfeed();
        },
        info: function(id) {
          return new User().getInfo(id);
        },
        media: {
          recent: function(id) {
            return new User().getMediaRecent(id);
          },
          liked: function() {
            return new User().getMediaLiked();
          }
        },
        search: function(query) {
          return new User().search(query);
        }
      }
    };
  });

}).call(this);
