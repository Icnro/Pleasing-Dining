angular.module('starter.services', [])
    .factory('News', function () {
        // Might use a resource here that returns a JSON array
        var news = [
        {
            date: '9月20日',
            temp: '28°',
            tomorrow: '明天 周一',
            
        }]
        //for (var i = 0; i < 4; i++) {

        // for (var j = 0; j < 3; j++) {
        // items[i].lists.push(i + '-' + j);
        // }
        // }

        return {
            all: function () {
                return news;
            }
        };

    })
.factory('Items', function () {
    // Might use a resource here that returns a JSON array
    var items = [
    {id:0,
            name: '粉蒸牛肉',
            price: 3.5,
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%'
        },
        {id:1,
            name: '麻婆豆腐',
            price: 3.5,
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%'
            
        },
        {id:2,
            name: '同济大排',
            price: 3.5,
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%'
        },
        {id:3,
            name: '番茄炒蛋',
            price: 3.5,
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%'
        }];
 
   //for (var i = 0; i < 4; i++) {
       
       // for (var j = 0; j < 3; j++) {
           // items[i].lists.push(i + '-' + j);
       // }
   // }

    return {
        all: function () {
            return items;
        },
        remove: function (item) {
            items.splice(items.indexOf(item), 1);
        },
        get: function (itemId) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === parseInt(itemId)) {
                    return items[i];
                }
            }
            return null;
        }
    };

})
.factory('Chats', function () {
    // Might use a resource here that returns a JSON array
    var chats = [
        { id: 0, name: '学苑食堂' },
        { id: 1, name: '西苑食堂' },
        { id: 2, name: '西北食堂' },
        { id: 3, name: '北苑食堂' },
        { id: 4, name: '留学生食堂' },
        { id: 5, name: '第四食堂' }
    ];
    // Some fake testing data


    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };

})
.factory('recommend', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: '..img/ccccccc.jpg'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: '..img/ccccccc.jpg'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: '..img/ccccccc.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: '..img/ccccccc.jpg'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: '..img/ccccccc.jpg'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
.factory('Foods', function () {
    // Might use a resource here that returns a JSON array
    var foods = [{
        id: 0,
        name: '糖醋鲤鱼',
        price: 3.5,
        lastText: 'You on your way?',
        face: 'img/ccccccc.jpg',
        list11: '123KJ',
        list12: '23%',
        list21: '123KJ',
        list22: '23%',
        list31: '123KJ',
        list32: '23%',
        list41: '123KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 1,
        name: '糖醋排骨',
        price: 3.5,
        lastText: 'Hey, it\'s me',
        face: 'img/ccccccc.jpg',
        list11: '133KJ',
        list12: '23%',
        list21: '133KJ',
        list22: '23%',
        list31: '133KJ',
        list32: '23%',
        list41: '133KJ',

        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 2,
        name: '清蒸咸鱼',
        price: 3.5,
        lastText: 'I should buy a boat',
        face: 'img/ccccccc.jpg',
        list11: '143KJ',
        list12: '23%',
        list21: '143KJ',
        list22: '23%',
        list31: '143KJ',
        list32: '23%',
        list41: '43KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 3,
        name: '辣炒蛤蜊',
        price: 3.5,
        lastText: 'Look at my mukluks!',
        face: 'img/ccccccc.jpg',
        list11: '113KJ',
        list12: '23%',
        list21: '153KJ',
        list22: '23%',
        list31: '163KJ',
        list32: '23%',
        list41: '173KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 4,
        name: '翡翠虾环',
        price: 3.5,
        lastText: 'This is wicked good ice cream.',
        face: 'img/ccccccc.jpg',
        list11: '123KJ',
        list12: '23%',
        list21: '123KJ',
        list22: '23%',
        list31: '123KJ',
        list32: '23%',
        list41: '123KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 5,
        name: '鱼香肉丝',
        price: 3.5,
        lastText: 'Hey, it\'s me',
        face: 'img/ccccccc.jpg',
        list11: '123KJ',
        list12: '23%',
        list21: '123KJ',
        list22: '23%',
        list31: '123KJ',
        list32: '23%',
        list41: '123KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 6,
        name: '宫保鸡丁',
        price: 3.5,
        lastText: 'I should buy a boat',
        face: 'img/ccccccc.jpg',
        list11: '123KJ',
        list12: '23%',
        list21: '123KJ',
        list22: '23%',
        list31: '123KJ',
        list32: '23%',
        list41: '123KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 7,
        name: '回锅肉',
        price: 3.5,
        lastText: 'Look at my mukluks!',
        face: 'img/ccccccc.jpg',
        list11: '123KJ',
        list12: '23%',
        list21: '123KJ',
        list22: '23%',
        list31: '123KJ',
        list32: '23%',
        list41: '123KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }, {
        id: 8,
        name: '麻婆豆腐',
        price: 3.5,
        lastText: 'This is wicked good ice cream.',
        face: 'img/ccccccc.jpg',
        list11: '123KJ',
        list12: '23%',
        list21: '123KJ',
        list22: '23%',
        list31: '123KJ',
        list32: '23%',
        list41: '123KJ',
        list42: '23%',
        tag1: '川菜',
        tag2: '助眠',
        tag3: '生肌'
    }];
    ;
    // Some fake testing data

    return {
        all: function () {
            return foods;
        },
        remove: function (food) {
            foods.splice(chats.indexOf(food), 1);
        },
        get: function (foodId) {
            for (var i = 0; i < foods.length; i++) {
                if (foods[i].id === parseInt(foodId)) {
                    return foods[i];
                }
            }
            return null;
        }
    };


})
.factory('SAims', function () {
    // Might use a resource here that returns a JSON array
    var items = [
    {
        id: 0,
        name: '粉蒸牛肉',
       
    },
        {
            id: 1,
            
        },
        {
            id: 2,
           
        },
        {
            id: 3,
           
        }];



    return {
        all: function () {
            return items;
        },
        remove: function (item) {
            items.splice(items.indexOf(item), 1);
        },
        get: function (itemId) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === parseInt(itemId)) {
                    return items[i];
                }
            }
            return null;
        }
    };

})

factory('Users', function () {
    // Might use a resource here that returns a JSON array
    var users = [
    {
        name:"gogle"
    }];

    //for (var i = 0; i < 4; i++) {

    // for (var j = 0; j < 3; j++) {
    // items[i].lists.push(i + '-' + j);
    // }
    // }

    return {
        all: function () {
            return items;
        },
        remove: function (item) {
            items.splice(items.indexOf(item), 1);
        },
        get: function (itemId) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === parseInt(itemId)) {
                    return items[i];
                }
            }
            return null;
        }
    };

})


.factory('Wins', function () {
    var wins = [
        { id: 0, name: '窗口一' },
        { id: 1, name: '窗口二' },
        { id: 2, name: '窗口三' },
        { id: 3, name: '窗口四' },
        { id: 4, name: '窗口五' }];
    return {
        all: function () {
            return wins;
        },
        remove: function (win) {
            wins.splice(wins.indexOf(win), 1);
        },
        get: function (winId) {
            for (var i = 0; i < wins.length; i++) {
                if (wins[i].id === parseInt(winId)) {
                    return wins[i];
                }
            }
            return null;
        }
    };
});