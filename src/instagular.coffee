angular.module 'instangular', []
    .factory 'instangular', ($http) ->

        class Basic
            constructor : () ->

            api:''

        class User
            constructor: (@id) ->
                @base ='https://api.instagram.com/v1/users'
                @client_id = '2ab3335d58b44b14a37695c3316f0ed0'
                @token = '227757018.f59def8.824dce507b3f43cf93738f080c3eb915'

             makeRequest: (path) ->
                request =  $http.get @ext, params : { access_token : @token}
                request.then (result) ->
                    @feed=result.data

            getfeed: () ->
                request =  $http.get @base+"/self/feed", params : { access_token : @token}
                request.then (result) ->
                    @feed=result.data

            getInfo: (id) ->
                request =  $http.get @base+ "/#{id}", params : { access_token : @token}
                request.then (result) ->
                    @info = result.data
                    
            getMediaRecent: (id) ->
                request =  $http.get @base+ "/#{id}/media/recent", params : { access_token : @token}
                request.then (result) ->
                    @info = result.data                    
                    
            getMediaLiked: () ->
                request =  $http.get @base+ "/self/media/liked", params : { access_token : @token}
                request.then (result) ->
                    @info = result.data  
            search : (query) ->
                request =  $http.get @base+ "/search", params : { access_token : @token, q:query }
                request.then (result) ->
                    @info = result.data                 
                    
      
        result =
            user:
                feed : () ->
                    new User().getfeed()
                info : (id) ->
                    new User().getInfo(id)
                media : 
                    recent : (id) ->
                        new User().getMediaRecent(id)
                    liked : () ->
                        new User().getMediaLiked()
                search : (query) ->
                    new User().search(query)
