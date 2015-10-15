// controller.js

mobileApp.controller('listController', function ($scope, $routeParams, mobileService) {
    
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

mobileApp.controller('detailController', function ($scope, $routeParams, mobileService) {
    if($routeParams.id) {
        var getDetail = mobileService.getDetail($routeParams.id);
        
        getDetail.then(
        function(data) {
            
            if(data){
                
                if(data.connectivity.infrared == false) {
                    data.connectivity.infrared = "No";
                }else{
                    data.connectivity.infrared = "Yes";
                }
                if(data.connectivity.gps == false) {
                    data.connectivity.gps = "No";
                }else{
                    data.connectivity.gps = "Yes";
                }
                if(data.display.touchScreen == false) {
                    data.display.touchScreen = "No";
                }else{
                    data.display.touchScreen = "Yes";
                }
                
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