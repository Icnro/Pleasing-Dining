angular.module('starter.controllers', [])
.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'AE',
        link: function ($scope) {
            $rootScope.hideTabs = 'tabs-item-hide';
            $scope.$on('$destroy', function () {
                $rootScope.hideTabs = '';
            })
        }
    }

})
.controller('DashCtrl', function ($scope, News) {
   
})
.controller('ChatsCtrl', function ($scope, $ionicModal, $state, Chats, Wins, Foods, Items) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log('ChatsCtrl');
    $scope.chats = Chats.all();
    $scope.foods = Foods.all();
    $scope.wins = Wins.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);


    };

})

.controller('ChatDetailCtrl', function ($scope, $stateParams, $state, $ionicModal, $state, Chats, Foods, Wins, Items) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.foods = Foods.all();
    $scope.wins = Wins.all();
    
    $scope.sel = Foods.get(0)
    $scope.getfood = function (sel) {
        
            $scope.sel = Foods.get(sel);
        
       
    };
    $ionicModal.fromTemplateUrl('templates/choose.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    $scope.items = Items.all();

    $scope.togglelist = function (items) {
        if ($scope.islistShown(items)) {
            $scope.shownlist = null;

        } else {
            $scope.shownlist = items;
        }
    };
    $scope.islistShown = function (items) {
        return $scope.shownlist === items;
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (items) {
        if ($scope.isGroupShown(items)) {
            $scope.shownGroup = null;

        } else {
            $scope.shownGroup = items;
        }
    };
    $scope.isGroupShown = function (items) {
        return $scope.shownGroup === items;
    }

})
 .controller('ChooseCtrl', function ($scope, $stateParams, $state, $ionicModal, $state, Chats, Foods, Wins, Items) {
     $scope.chat = Chats.get($stateParams.chatId);
     $scope.foods = Foods.all();
     $scope.wins = Wins.all();
     $ionicModal.fromTemplateUrl('templates/choose.html', {
         scope: $scope,
         animation: 'slide-in-right'
     }).then(function (modal) {
         $scope.modal = modal;
         $scope.foods = Foods.all();
         $scope.wins = Wins.all();
     });
     $scope.openModal = function () {
         $scope.modal.hide();
         $scope.modal.show();
     }
     $scope.closeModal = function () {
         $scope.modal.hide();

     }
     $scope.items = Items.all();


     /*
      * if given group is the selected group, deselect it
      * else, select the given group
      */
     $scope.toggleGroup = function (items) {
         if ($scope.isGroupShown(items)) {
             $scope.shownGroup = null;

         } else {
             $scope.shownGroup = items;
         }
     };
     $scope.isGroupShown = function (items) {
         return $scope.shownGroup === items;
     }


 })
.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('MeCtrl', function ($scope,Chats) {
    $scope.settings = {
        enableFriends: true
    };
    $scope.chats = Chats.all();
})
.controller('AboutCtrl', function ($scope, Users, $ionicActionSheet, $timeout, $ionicNavBarDelegate, $state) {
    $scope.actshow = function () {// Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            
            buttons: [
				{ text: "拍照" },
				{ text: "从手机相册选择" }
            ],
            buttonClicked: function (index) {
                return true;
            },
            cancelText: "取消",
            cancel: function () {
                // add cancel code..
            }   
        });
     
        // For example's sake, hide the sheet after two seconds
        $timeout(function () {
            //	hideSheet();
        }, 2000);

    };
   
      
        $scope.users =Users.all()

    $scope.createContact = function (u) {
        
        $state.go('tab.me-aboutme', {});
     
    };
    $scope.goBack = function () {
        $scope.changeName ==null;
        $scope.changeName = username;
        $ionicNavBarDelegate.back();
       
    };
    
   
})

.controller('AboutnameCtrl', function ($scope, Chats) {
    $scope.settings = {
        enableFriends: true
    };
    $scope.chats = Chats.all();
})
.controller('StaCtrl', function ($scope, Chats) {

    })

.controller('AimCtrl', function ($scope, Chats) {
        $scope.items = [
     { label: "养心" },
     { label: "祛寒" },
     { label: "补肾" },
     { label: "润肺" },
     { label: "减肥" },
     { label: "滋阴" },
     { label: "补血" },
     { label: "抗衰老" },
     { label: "降血压" },
     { label: "祛痘" },
     { label: "丰胸" },
     { label: "防癌" },
     { label: "增肌" },
     { label: "养胃" },
     { label: "明目" },
     { label: "防辐射" },
     { label: "降血脂" },
     { label: "健脑益智" },
     { label: "排毒" },
     { label: "壮阳" },
     { label: "乌发" },
     { label: "调经" },
     { label: "助睡眠" },
     { label: "健脾胃" },
     { label: "便秘痔疮" },
     { label: "提高免疫力" },
     { label: "清热去火" },
     { label: "美白" },
     { label: "降血糖" },
     { label: "改善肠道菌群" }]

    })
.controller('InfroCtrl', function ($scope, Chats) {
    $scope.settings = {
        enableFriends: true
    };
    $scope.chats = Chats.all();
})
;