/**
 * Created by hxsd on 2016/8/3.
 */
dosApp.controller("dosCtrl", function ($scope, $http, $ionicTabsDelegate, $interval,$ionicScrollDelegate) {
    $scope.slideChanged = function (index) {
        console.log("index:" + index);
    };
    //作为一个原则：数据版定的时候，尽可能绑定到对象上
    $scope.data = {
        page: 0
    };
    $scope.pagerClick = function (index) {
        $scope.data.page = index;
    };
    //初始化数据
    $http.get("json/userData.json").success(function (data) {
        $scope.userData = data;
    });
    // 实现下拉更新 向服务器端请求新的数据，替换掉现有的数据
    $scope.reFresh = function(){
        $http.get("json/updata.json").success(function(data){
            $scope.userData = data;
        }).finally(function(){
            $scope.$broadcast("scroll.refreshComplete");
        });
    };
    // 实现无限滚动 向服务器端请求新的数据，替换掉现有的数据
    $scope.loadMore = function(){
        //向服务器请求一页新的数据，追加到现有数据之后
        $http.get("json/updata.json").success(function(data){
            //使用Array的原型方法push；等价于$scope.products.push(data);
            Array.prototype.push.apply($scope.userData,data);
        }).finally(function(){
            //通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
    //变色操作
    $scope.changeHeart = function(item){
        item.like = !item.like;
        item.likePerson++;
    };

    $scope.changeFollowed = function(item){
        item.followed = !item.followed;
    };

    var sTop = [];
    $scope.getTop = function(){
        sTop = $ionicScrollDelegate.getScrollPosition();
        if($scope.getTop.top>=0){
            return true;
        }else{
            return false;
        }
    };
    $scope.toTop = function(){
        $ionicScrollDelegate.scrollTop(true);
    };


});
