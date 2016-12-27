/**
 * Created by hxsd on 2016/8/3.
 */
var dosApp = angular.module("dosApp", ["ionic"]);
dosApp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    }).state("tabs.home",{
        url:"/home",
        views:{
            "tabs-home":{templateUrl:"views/home/home.html",controller:"dosCtrl"}
        }
    }).state("tabs.search",{
        url:"/search",
        views:{"tabs-search":{templateUrl:"views/search/search.html"}}
    }).state("tabs.takePic",{
        url:"/takePic",
        views:{"tabs-takePic":{templateUrl:"views/takePic/takePic.html"}}
    }).state("tabs.followed",{
        url:"/followed",
        views:{"tabs-followed":{templateUrl:"views/followed/followed.html",controller:"followedCtrl"}}
    }).state("tabs.personal",{
        url:"/personal",
        views:{"tabs-personal":{templateUrl:"views/personal/personal.html",controller:"personalCtrl"}}
    }).state("tabs.addFri",{
        url:"/addFri",
        views:{"tabs-home":{templateUrl:"views/addFri/addFri.html"}}
    })
        // .state("tabs.expert",{
    //     url:"/expert",
    //     views:{"tabs-home":{templateUrl:"views/addFri/expert/expert.html"}}
    // }).state("tabs.freshMen",{
    //     url:"/freshMen",
    //     views:{"tabs-freshMen":{templateUrl:"views/addFri/freshMen/freshMen.html"}}
    // }).state("tabs.weChat",{
    //     url:"/weChat",
    //     views:{"tabs-weChat":{templateUrl:"views/addFri/weChat/weChat.html"}}
    // }).state("tabs.Weibo",{
    //     url:"/Weibo",
    //     views:{"tabs-Weibo":{templateUrl:"views/addFri/Weibo/Weibo.html"}}
    // });

    $urlRouterProvider.otherwise("/tabs/home");
    
});