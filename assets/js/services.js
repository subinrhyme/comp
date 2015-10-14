mobileApp.factory('mobileService', function ($http, $q) {
    
    return {
        getList: function() {
            var deferred = $q.defer();
            $http.get('assets/json/phones.json').then(
                function(response) {
                    //console.log(response);
                    data = response.data;
                    deferred.resolve(data);
                }, function(response) {
                    deferred.reject(response);
                }
            )
            
            return deferred.promise;
        },
        
        getDetail: function(id) {
            var deferred = $q.defer();
            $http.get('assets/json/'+id+'.json').then(
                function(response) {
                    //console.log(response.data);
                    data = response.data;
                    deferred.resolve(data);
                }, function(response) {
                    deferred.reject(response);
                }
            )
            
            return deferred.promise;
        }
        
    };
});