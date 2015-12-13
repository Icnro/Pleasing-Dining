// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.book', {
      url: '/book',
      views: {
        'tab-book': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.book-detail', {
      url: '/book/:chatId',
      views: {
        'tab-book': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.recommend', {
      url: '/recommend',
    views: {
        'tab-recommend': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

 .state('tab.myinfro', {
        url: '/myinfro',
        views: {
            'tab-myinfro': {
                templateUrl: 'templates/tab-myinfro.html',
                controller: 'InfroCtrl'
            }
        }
    })
     .state('tab.me', {
         url: '/me',
         views: {
             'tab-me': {
                 templateUrl: 'templates/tab-me.html',
                 controller: 'MeCtrl'
             }
         }
     })
    .state('tab.me-aboutme', {
        url: '/me/aboutme',
          cache: 'true',
        views: {
            'tab-me': {
                templateUrl: 'templates/tab-aboutme.html',
                controller: 'AboutCtrl',
              
            }
        }
    })
      .state('tab.me-aboutme-name', {
          url: '/me/aboutme/name',
          views: {
              'tab-me': {
                  templateUrl: 'templates/tab-aboutme-name.html',
                  controller: 'AboutCtrl'
              }
          }
      })
       .state('tab.me-aboutme-gender', {
           url: '/me/aboutme/gender',
           views: {
               'tab-me': {
                   templateUrl: 'templates/tab-aboutme-gender.html',
                   controller: 'AboutCtrl'
               }
           }
       })
       .state('tab.me-aboutme-state', {
           url: '/me/aboutme/state',
           views: {
               'tab-me': {
                   templateUrl: 'templates/tab-aboutme-state.html',
                   controller: 'AboutCtrl'
               }
           }
       })
    .state('tab.me-myinfro', {
        url: '/me/myinfro',
        views: {
            'tab-me': {
                templateUrl: 'templates/tab-myinfro.html',
                controller: 'InfroCtrl'
            }
        }
    })
 
     .state('tab.me-myaim', {
         url: '/me/myaim',
         views: {
             'tab-me': {
                 templateUrl: 'templates/tab-myaim.html',
                 controller: 'AimCtrl'
             }
         }
     })

     .state('tab.me-mysta', {
         url: '/me/mysta',
         views: {
             'tab-me': {
                 templateUrl: 'templates/tab-mysta.html',
                 controller: 'StaCtrl'
             }
         }
     })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
