/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("dosApp").controller("followedCtrl",function($scope){
    $scope.btnShow = false;
    $scope.slideChange =function () {
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.btnShow = true;
        }else{
            $scope.btnShow = false;
        }
    }

    $scope.pageClick = function(index){
        $scope.page = index;
    };
});