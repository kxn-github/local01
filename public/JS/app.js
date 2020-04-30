var app = angular.module('benefitApp', ['ui.router','ngIdle','ui.router.state','blockUI','ngStorage','main','admin','loginmain','manager','request']);
app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider) {
  $stateProvider
    .state('userprofile', {
      url: '/userprofile',
      views: {
        '': {
          templateUrl: 'web/pages/SG/userProfile.html',
          controller: 'userprofileController'
        },
        'topWgt@userprofile': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController'
        },
        'footer@userprofile': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_userprofile();
        }
      }

    })
    .state('IN_9', {
      url: '/IN_9',
      views: {
        '': {
          templateUrl: 'public/page/IN/IN_9.html',
          controller: 'homepageController'
        },
        'topWgt@homepage': {
          templateUrl: 'public/page/header.html',
          controller: 'topController',

        },
        'footer@homepage': {
          templateUrl: 'public/page/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_select();
        }
      }
    })
    .state('companyselect', {
      url: '/companyselect',
      views: {
        '': {
          templateUrl: 'web/pages/SG/companySelect.html',
          controller: 'companyselectController'
        },
        'topWgt@companyselect': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController'
        },
        'footer@companyselect': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_select();
        }
      }

    })
    .state('mgr_homepage', {
      url: '/mgr_homepage',
      views: {
        '': {
          templateUrl: 'web/pages/SG/mgr_homepage.html',
          controller: 'mhomepageController'
        },
        'topWgt@mgr_homepage': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',
        },
        'footer@mgr_homepage': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonM();
        }
      }
    })
    .state('ba_homepage', {
      url: '/ba_homepage',
      views: {
        '': {
          templateUrl: 'web/pages/SG/ba_homepage.html',
          controller: 'bahomepageController'
        },
        'topWgt@ba_homepage': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@ba_homepage': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonBA();
        }
      }
    })
    .state('homepage', {
      url: '/homepage',
      views: {
        '': {
          templateUrl: 'web/pages/SG/homepage.html',
          controller: 'homepageController'
        },
        'topWgt@homepage': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@homepage': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_select();
        }
      }
    })
    .state('appMgrboard', {
      url: '/appMgrboard',
      views: {
        '': {
          templateUrl: 'web/pages/SG/appMgrBoard.html',
          controller: 'appMgrBoardController'
        },
        'topWgt@appMgrboard': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@appMgrboard': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonM();
        }
      }
    })
    .state('appBaboard', {
      url: '/appBaboard',
      views: {
        '': {
          templateUrl: 'web/pages/SG/appBaBoard.html',
          controller: 'appBaBoardController'
        },
        'topWgt@appBaboard': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@appBaboard': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonBA();
        }
      }
    })
    .state('transportMgrRequest', {
      url: '/transportMgrRequest',
      views: {
        '': {
          templateUrl: 'web/pages/SG/transportMgrRequest.html',
          controller: 'transportMgrRequestController'
        },
        'topWgt@transportMgrRequest': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@transportMgrRequest': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonM();
        }
      }
    })
    .state('transportBaRequest', {
      url: '/transportBaRequest',
      views: {
        '': {
          templateUrl: 'web/pages/SG/transportBaRequest.html',
          controller: 'transportBaRequestController'
        },
        'topWgt@transportBaRequest': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@transportBaRequest': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonBA();
        }
      }
    })
    .state('tansportBAapprDetail', {
      url: '/tansportBAapprDetail/:reqnm',
      views: {
        '': {
          templateUrl: 'web/pages/SG/tansportBAapprDetail.html',
          controller: 'tansportBAapprDetailController'
        },
        'topWgt@tansportBAapprDetail': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@tansportBAapprDetail': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function($stateParams,common){
          return common.validateLogin_approveBA($stateParams.reqnm);
        }
      }

    })
    .state('tansportBAreqDetail', {
      url: '/tansportBAreqDetail',
      views: {
        '': {
          templateUrl: 'web/pages/SG/tansportBAreqDetail.html',
          controller: 'tansportBArequestDetailController'
        },
        'topWgt@tansportBAreqDetail': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@tansportBAreqDetail': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonBA();
        }
      }
    })
    .state('tansportMgrreqDetail', {
      url: '/tansportMgrreqDetail/:reqnm',
      views: {
        '': {
          templateUrl: 'web/pages/SG/tansportMgrreqDetail.html',
          controller: 'tansportMgrRequestDetailController'
        },
        'topWgt@tansportMgrreqDetail': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@tansportMgrreqDetail': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function($stateParams,common){
          return common.validateLogin_requestM($stateParams.reqnm);
        }
      }

    })
    .state('mgrReqlist', {
      url: '/mgrReqlist',
      views: {
        '': {
          templateUrl: 'web/pages/SG/mgrReqlist.html',
          controller: 'tansportmgrReqlistController'
        },
        'topWgt@mgrReqlist': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@mgrReqlist': {
          templateUrl: 'web/pages/SG/footer.html',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonM();
        }
      }
    })
    .state('baReqlist', {
      url: '/baReqlist',
      views: {
        '': {
          templateUrl: 'web/pages/SG/baReqlist.html',
          controller: 'tansportBaReqlistController'
        },
        'topWgt@baReqlist': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
        'footer@baReqlist': {
          templateUrl: 'web/pages/SG/footer.html',


        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonBA();
        }
      }
    })
    .state('mgrDownloads', {
      url: '/mgrDownloads',
      views: {
        '': {
          templateUrl: 'web/pages/SG/mgrDownloads.html',
          controller: 'tansportmgrReqlistController'
        },
        'topWgt@mgrDownloads': {
          templateUrl: 'web/pages/SG/topWgt.html',
          controller: 'topController',

        },
      },
      resolve:{
        validation:function(common){
          return common.validateLogin_commonBA();
        }
      }
    })
    .state('denied', {
      url: '/denied',
      templateUrl: 'web/pages/SG/denied.html'
    })
    .state('construction', {
      url: '/construction',
      templateUrl: 'web/pages/SG/construction.html'
    });

  $urlRouterProvider.otherwise('/userprofile');

  $httpProvider.interceptors.push(['$q', '$sessionStorage', function ($q, $sessionStorage) {
    return {
      request: function (config) {
        // Header - Token
        config.headers = config.headers || {};
        if ($sessionStorage.token) {
        };

        return config;
      },

      response: function (response) {

        if (response.status == 200) {
//	           console.log('do something...');
        }

        return response || $q.when(response);
      },

      responseError: function (response) {
        return $q.reject(response);
      }
    }
  }])



}]);
app.config(function($httpProvider){

  $httpProvider.defaults.transformRequest = function(obj){
    var str = [];
    for(var p in obj){
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  }

  $httpProvider.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }

});

app.config(function(IdleProvider, KeepaliveProvider) {
  IdleProvider.idle(900); // 15 min
  IdleProvider.timeout(180);
});

app.run(function($rootScope, Idle,$state,adminService, common,session,$timeout,$window) {
  Idle.watch();
  $rootScope.$on('IdleStart', function() {
    //adminService.popModel('sessionModal')
    common.popModel('sessionModal')
  });
  $rootScope.$on('IdleTimeout', function() {
    session.setUser({},'');
    session.setCurReqId('');
    $("#sessionModal").modal("hide")
    $window.location.href='/logout';
  });

});

app.factory('locals',['$window',function($window){
  return{
    set :function(key,value){
      $window.localStorage[key]=value;
    },
    get:function(key,defaultValue){
      return  $window.localStorage[key] || defaultValue;
    },
    setObject:function(key,value){
      $window.localStorage[key]=JSON.stringify(value);
    },
    getObject: function (key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }

  }
}]);

app.factory('session',['$sessionStorage',function($sessionStorage){
  return{
    setCurReqId :function(value){
      $sessionStorage.curReqId=value;
    },
    setFlag :function(value){
      $sessionStorage.flag=value;
    },
    getFlag :function(){
      return  $sessionStorage.flag;
    },
    setCompanycode :function(value){
      $sessionStorage.companycode=value;
    },
    getCompanycode :function(){
      return  $sessionStorage.companycode;
    },
    getCurReqId:function(){
      return  $sessionStorage.curReqId || '';
    },
    setUser_old:function(value,token){
      $sessionStorage.user=JSON.stringify(value);
      $sessionStorage.token=token;
    },
    setUser:function(value){
      $sessionStorage.user=JSON.stringify(value);
    },
    getUser: function () {
      return JSON.parse($sessionStorage.user || '{}');

    }
  }
}]);
// for test

