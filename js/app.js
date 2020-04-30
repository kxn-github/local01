var app = angular.module('project', ['ngRoute', 'firebase']);
app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'web/pages/login.html',
      controller: 'loginController'
    })
    .state('employee', {
      url: '/employee',
      views: {
        '': {
          templateUrl: 'web/pages/employee.html',
          controller: 'registerController'
        },
        'linkWgt@employee': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@employee': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('structure', {
      url: '/structure',
      views: {
        '': {
          templateUrl: 'web/pages/structure.html',
          controller: 'mainController'
        },
        'linkWgt@structure': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@structure': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('myReqList', {
      url: '/myReqList',
      views: {
        '': {
          templateUrl: 'web/pages/myReqList.html',
          controller: 'myReqListController',
        },
        'linkWgt@myReqList': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@myReqList': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('limitChange', {
      url: '/limitChange',
      views: {
        '': {
          templateUrl: 'web/pages/limitChange.html',
          controller: 'limitChgController',
        },
        'linkWgt@limitChange': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@limitChange': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('limitChangeDetail', {
      url: '/limitChangeDetail',
      views: {
        '': {
          templateUrl: 'web/pages/limitChangeDetail.html',
          controller: 'limitChgDetailController',
        },
        'linkWgt@limitChangeDetail': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@limitChangeDetail': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('myReqDetail', {
      url: '/myReqDetail',
      views: {
        '': {
          templateUrl: 'web/pages/myReqDetail.html',
          controller: 'myReqDetailController',
        },
        'linkWgt@myReqDetail': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@myReqDetail': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('profile', {
      url: '/profile',
      views: {
        '': {
          templateUrl: 'web/pages/profile.html',
          controller: 'profileController',
        },
        'linkWgt@profile': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@profile': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('buApprove', {
      url: '/buApprove',
      views: {
        '': {
          templateUrl: 'web/pages/buApprove.html',
          controller: 'buAppController',
        },
        'linkWgt@buApprove': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@buApprove': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('buAppDetail', {
      url: '/buAppDetail',
      views: {
        '': {
          templateUrl: 'web/pages/buAppDetail.html',
          controller: 'buAppDetailController',
        },
        'linkWgt@buAppDetail': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@buAppDetail': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('mgrApprove', {
      url: '/mgrApprove',
      views: {
        '': {
          templateUrl: 'web/pages/mgrApprove.html',
          controller: 'mgrAppController',
        },
        'linkWgt@mgrApprove': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@mgrApprove': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('myteam1', {
      url: '/myteam1',
      views: {
        '': {
          templateUrl: 'web/pages/myteam1.html',
          controller: 'mgrTeamController',
        },
        'linkWgt@myteam1': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@myteam1': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('admAction', {
      url: '/admAction',
      cache:'false',
      views: {
        '': {
          templateUrl: 'web/pages/admAction.html',
          controller: 'actListController',
        },
        'linkWgt@admAction': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@admAction': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('actDetail', {
      url: '/actDetail',
      views: {
        '': {
          templateUrl: 'web/pages/actDetail.html',
          controller: 'actDetailController',
        },
        'linkWgt@actDetail': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@actDetail': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('cardMngt', {
      url: '/cardMngt',
      views: {
        '': {
          templateUrl: 'web/pages/cardMngt.html',
          controller: 'cardMngtController',
        },
        'linkWgt@cardMngt': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@cardMngt': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('actLimitChg', {
      url: '/actLimitChg',
      views: {
        '': {
          templateUrl: 'web/pages/actLimitChg.html',
          controller: 'actLimitListController',
        },
        'linkWgt@actLimitChg': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@actLimitChg': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('actLimitDetail', {
      url: '/actLimitDetail',
      views: {
        '': {
          templateUrl: 'web/pages/actLimitDetail.html',
          controller: 'actLimitDetailController',
        },
        'linkWgt@actLimitDetail': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@actLimitDetail': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('allRequest', {
      url: '/allRequest',
      views: {
        '': {
          templateUrl: 'web/pages/allRequest.html',
          controller: 'listAllController',
        },
        'linkWgt@allRequest': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@allRequest': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    })
    .state('mgrAppDetail', {
      url: '/mgrAppDetail',
      views: {
        '': {
          templateUrl: 'web/pages/mgrAppDetail.html',
          controller: 'mgrAppDetailController',
        },
        'linkWgt@mgrAppDetail': {
          templateUrl: 'web/pages/linkWgt.html',
          controller: 'linkController'
        },
        'topWgt@mgrAppDetail': {
          templateUrl: 'web/pages/topWgt.html',
          controller: 'topController'
        }
      }
    });
  $urlRouterProvider.otherwise('/login');

  $httpProvider.interceptors.push(['$q', '$sessionStorage', function ($q, $sessionStorage) {
    return {
      request: function (config) {
        // Header - Token
        config.headers = config.headers || {};
        if ($sessionStorage.token) {
          config.headers.token = $sessionStorage.token;
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

app.run(function($rootScope, Idle,$state,adminService, session,$timeout) {
  Idle.watch();
  $rootScope.$on('IdleStart', function() {
    adminService.popModel('sessionModal')
  });
  $rootScope.$on('IdleTimeout', function() {
    session.setUser({},'');
    session.setCurReqId('');
    $("#sessionModal").modal("hide")
    $state.go('login',{},{reload:true});
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
    getCurReqId:function(){
      return  $sessionStorage.curReqId || '';
    },
    setUser:function(value,token){
      $sessionStorage.user=JSON.stringify(value);
      $sessionStorage.token=token;
    },
    getUser: function () {
      return JSON.parse($sessionStorage.user || '{}');
    }

  }
}]);
