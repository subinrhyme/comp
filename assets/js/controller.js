// controller.js

mobileApp.controller('listController', function ($scope, $http, $location, $routeParams, mobileService) {
    
    var getList = mobileService.getList();
    
    getList.then(
    function(data) {
        if(data.length>0){
            $scope.mobileData = data;
            $scope.sortBy = 'name';
        }else{
            $scope.mobileData = "nodata";
        }
    },
    function(error) {
        $scope.mobileData = "nodata";
    });
    
    
    
});

mobileApp.controller('detailController', function ($scope, $http, $location, $routeParams, mobileService) {
    if($routeParams.id) {
        var getDetail = mobileService.getDetail($routeParams.id);
        
        getDetail.then(
        function(data) {
            
            if(data){
                $scope.mobileData = data;
            }else{
                $scope.mobileData = "nodata";
            }
        },
        function(error) {
            $scope.mobileData = "nodata";
        });
        
    }
});