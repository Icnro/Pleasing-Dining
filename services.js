angular.module('starter.services', [])
    .factory('Meals', function () {
        // Might use a resource here that returns a JSON array
        var items = [
            { id: 0, text: "Breakfast", selected: false, info: "（后台数据）显示饮食状态" },
            { id: 1, text: "Lunch", selected: false, info: "（后台数据）显示饮食状态" },
            { id: 2, text: "Dinner", selected: false, info: "" },
            { id: 3, text: "Extra Meal", selected: false, info: "" }
        ];

        
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
            indexOf: function (item) {
                return items.indexOf(item);
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
    .factory('Sports', function () {
        // Might use a resource here that returns a JSON array
        var sports = [{
            id: 0,
            userid: 0,
            date: 2016 - 03 - 09,
            items: [
             {
                   name: "跑步",
                 time: 20,
                    costqk: 200
                }, {
                   name: "游泳",
                   time: 20,
                    costqk: 800
              }
            ]
        }];
        // Some fake testing data

        return {
            all: function () {
                return sports;
            },
            remove: function (sport) {
                sports.splice(sports.indexOf(sport), 1);
            },
            get: function (sportId) {
                for (var i = 0; i < sports.length; i++) {
                    if (sports[i].id === parseInt(sportId)) {
                        return sports[i];
                    }
                }
                return null;
            },
            getbyuser: function (userid) {
            	for (var i=0; i<sports.length;i++){
            		if (sports[i].userid === parseInt(userid)){
            			return sports[i];
            		}
            	}
            }, 
            edit: function(data) {
            	sports[0].userid=data.id;
            	var time = new Date();
				var t = time.getFullYear()+ "-"+ time.getMonth() + "-" + time.getDate();
				sports[0].date=t;
				if (data.sports.length === 0) {
					sports[0].items.splice(0,sports[0].items.length);
					//sports[0].items.push("今天还没有运动，请加油！");
				} else {
					sports[0].items.splice(0,sports[0].items.length);
					for (var i=0;i<data.sports.length;i++){
						sports[0].items.push({
                    		name: data.sports[i].sport_name,
                   			time: data.sports[i].time,
                    		costqk: data.sports[i].energy_cost
						});
					}
				}
           	},
            add: function(item) {
            	sports[0].items.push({
                    name: item.name,
                   	time: item.time,
                    costqk: item.costqk
            	});
            }
        };

    })
    .factory('Sportitems', function () {
        // Might use a resource here that returns a JSON array
        var sportitems = [{
            id:0,
            name: "走路（快）",
            proqk: 279,
            icon: "ion-android-walk"

        }, {
            id: 1,
            name: "走路（慢）",
            proqk: 91,
            icon: "ion-android-walk"

        }, {
            id: 2,
            name: "骑车",
            proqk: 800,
            icon: "ion-android-bicycle"
        }];
        // Some fake testing data

        return {
            all: function () {
                return sportitems;
            },
            remove: function (sportitem) {
                floors.splice(floors.indexOf(sportitem), 1);
            },
            get: function (sportitemId) {
                for (var i = 0; i < sportitems.length; i++) {
                    if (sportitems[i].id === parseInt(sportitemId)) {
                        return sportitems[i];
                    }
                }
                return null;
            }
        };

    })
     .factory('UserSportitems', function () {
         // Might use a resource here that returns a JSON array
         var sportitems = [{
             id: 0,
             name: "走路（快）",
             proqk: 279,
             icon: "ion-android-walk"

         }, {
             id: 1,
             name: "走路（慢）",
             proqk: 91,
             icon: "ion-android-walk"

         }, {
             id: 2,
             name: "骑车",
             proqk: 800,
             icon: "ion-android-bicycle"
         }];
         // Some fake testing data

         return {
             all: function () {
                 return sportitems;
             },
             remove: function (sportitem) {
                 floors.splice(floors.indexOf(sportitem), 1);
             },
             get: function (sportitemId) {
                 for (var i = 0; i < sportitems.length; i++) {
                     if (sportitems[i].id === parseInt(sportitemId)) {
                         return sportitems[i];
                     }
                 }
                 return null;
             }
         };

     })
       .factory('Userdishes', function () {
           // Might use a resource here that returns a JSON array
           var items = [{
               id: 0,
                   userid: 0,
                   date: 2016 - 03 - 10,
                   items: [
                    {   dishid: 2,
                        name: ' Steamed Salted Fish',
                        count: 1,
                        canteenid: 11,
                        meal:1
                    }, {
                        dishid: 1,
                        name: 'Sweet and Sour Spare Ribs',
                        count: 2,
                        canteenid: 11,
                        meal: 1
                    }
                   ]
               }];
           // Some fake testing data

           return {
               all: function () {
                   return tems;
               },
               remove: function (item) {
                   items.splice(items.indexOf(item), 1);
               },
               get: function ( itemId) {
                   for (var i = 0; i < items.length; i++) {
                       if ( items[i].id === parseInt( itemId)) {
                           return items[i];
                       }
                   }
                   return null;
               }
           };

       })
    .factory('Items', function () {
        // Might use a resource here that returns a JSON array
        var items = [];

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
            indexOf: function (item) {
                return items.indexOf(item);
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
   
    .factory('Canteens', function () {
        // Might use a resource here that returns a JSON array
        var canteens = [{
            id: 1,
            name: '学苑',
            items: [{
                id: 11,
                name: '一楼小炒'
            }, {
                id: 12,
                name: '一楼大众'
            }, {
                id: 13,
                name: '二楼风味'
            }, {
                id: 14,
                name: '二楼自选'
            }]
        },
        {
            id: 2,
            name: '西苑',
            items: [{
                id: 21,
                name: '一楼小炒'
            }, {
                id: 22,
                name: '二楼风味'
            }, {
                id: 23,
                name: '二楼自选'
            }, {
                id: 24,
                name: '三楼大众'
            }, {
                id: 25,
                name: '三楼清真'
            }]
        },
        {
            id: 3,
            name: '西北'
        },
        {
            id: 4,
            name: '北苑'
        },
        {
            id: 5,
            name: '留食'
        },
        {
            id: 6,
            name: '南校区'
        }];
        // Some fake testing data

        return {
            all: function () {
                return canteens;
            },
            remove: function (canteen) {
                canteens.splice(canteens.indexOf(canteen), 1);
            },
            get: function (canteenId) {
                for (var i = 0; i < canteens.length; i++) {
                    if (canteens[i].id === parseInt(canteenId)) {
                        return canteens[i];
                    }
                    for (var j = 0; j < canteens[i].items.length; j++) {
                        if (canteens[i].items[j].id === parseInt(canteenId)) {
                            return canteens[i].items[j];
                        }
                    }
                }
                return null;
            }
        };

    })
    .factory('recommend', function () {
        // Might use a resource here that returns a JSON array
        // Some fake testing data
        var floors = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: '..img/food/ccccccc.jpg'
        },
        {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: '..img/food/ccccccc.jpg'
        },
        {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: '..img/food/ccccccc.jpg'
        },
        {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: '..img/food/ccccccc.jpg'
        },
        {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: '..img/food/ccccccc.jpg'
        }];

        return {
            all: function () {
                return floors;
            },
            remove: function (floor) {
                floors.splice(floors.indexOf(floor), 1);
            },
            get: function (floorId) {
                for (var i = 0; i < floors.length; i++) {
                    if (floors[i].id === parseInt(floorId)) {
                        return floors[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Nutritions', function () {
        var nutritions = [
            {
                name: "碳水化合物", status: 0
            }, {
                name: "蛋白质", status: 2
            }, {
                name: "脂肪", status: 1
            },
        ];
        return {
            all: function () {
                return nutritions;
            },
            remove: function (nutrition) {
                nutritions.splice(nutritions.indexOf(nutrition), 1);
            },
            get: function (nutritionId) {
                for (var i = 0; i < nutritions.length; i++) {
                    if (nutritions[i].id === parseInt(nutritionId)) {
                        return nutritions[i];
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
            name: 'Sweet and Sour Carp',
            price: 3.5,
           
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 1,
            name: 'Sweet and Sour Spare Ribs',
            price: 3.5,
            lastText: 'Hey, it\'s me',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 2,
            name: ' Steamed Salted Fish',
            price: 3.5,
            lastText: 'I should buy a boat',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 3,
            name: ' Braised Lamb Chops',
            price: 3.5,
            lastText: 'Look at my mukluks!',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 4,
            name: 'Crispy Chicken',
            price: 3.5,
            lastText: 'This is wicked good ice cream.',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 5,
            name: 'Shredded Pork with Garlic Sauce',
            price: 3.5,
            lastText: 'Hey, it\'s me',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id: 6,
            name: 'Kung Pao Chicken',
            price: 3.5,
            lastText: 'I should buy a boat',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id: 7,
            name: 'BBQ Scallops',
            price: 3.5,
            lastText: 'Look at my mukluks!',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id: 8,
            name: 'Mapo Tofu',
            price: 3.5,
            lastText: 'This is wicked good ice cream.',
            face: 'img/food/ccccccc.jpg',
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
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        }];;
        // Some fake testing data
        return {
            all: function () {
                return foods;
            },
            remove: function (food) {
                foods.splice(floors.indexOf(food), 1);
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
    .factory('Materials', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
            id: 0,
            name: 'Sweet and Sour Carp',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort: 2 // 1 is Materials ,2 is Diches
        },
        {
            id: 1,
            name: 'Sweet and Sour Spare Ribs',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },
        {
            id: 2,
            name: ' Steamed Salted Fish',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },
        {
            id: 3,
            name: ' Braised Lamb Chops',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },
        {
            id: 4,
            name: 'Crispy Chicken',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
           
        },
        {
            id: 5,
            name: 'Shredded Pork with Garlic Sauce',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },
        {
            id: 6,
            name: 'Kung Pao Chicken',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },
        {
            id: 7,
            name: 'BBQ Scallops',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },
        {
            id: 8,
            name: 'Mapo Tofu',
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort:2
        },{
            id: 9,
            name: "菠萝",
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort: 1
        }, {
            id: 10,
            name: "豆腐",
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort: 1
            

        },
        {
            id: 11,
            name: "鸡蛋",
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort: 1,
        },
        {
            id: 12,
            name: "牛奶",
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort: 1,


        },
        {
            id: 13,
            name: "蔬菜",
            face: 'img/food/ccccccc.jpg',
            info: "aaaaa",
            sort: 1,

        },
         {
             id: 14,
             name: "香蕉",
             face: 'img/food/ccccccc.jpg',
             info: "aaaaa",
             sort: 1,

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
    .factory('Userinfo', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
            id: 0,
            idcode: 28,
            day: 2,
            img: "img/food/ccccccc.jpg",
            name: "health",
            nickname: '好食',
            birth: "1994-02-17T16:00:00.000Z",
            gender: "男",
            uni: "同济大学",
            height: 180,
            weight: 60,
            havechecked:1,
            state: "天天向上",
            station: "减肥中",
            stadate:'2016.1.1',
            today_carbo: 0,
            today_energy: 0,
            today_protein: 0,
            today_fat: 0,
            aims: ["明目", "祛痘", "降血压"],
            qk: 3000,
			havechecked: 1,
           
        },
        ];

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
            },
            edit: function(item) {
            	items[0].idcode=item.id;
            	items[0].name=item.name;
				items[0].day=item.day;
				
            	items[0].nickname=item.nickname;
            	items[0].gender=item.gender;
            	items[0].height=item.height;
            	items[0].weight=item.weight;
            	items[0].today_carbo=item.today_carbo;
            	items[0].today_energy=item.today_energy;
            	items[0].today_protein=item.today_protein;
            	items[0].today_fat=item.today_fat;
            	
				items[0].surface_area = 0.0061*item.height+0.0128*item.weight-0.1529;
            	
    			var date = new Date(items[0].birth);
    			var bYear = date.getFullYear();
    			var bMonth = date.getMonth()+1;
    			var bDay = date.getDate();
				
				var currentDate = new Date();
				var thisYear = currentDate.getFullYear();
				var thisMonth = currentDate.getMonth() +1;
				var thisDay = currentDate.getDate();
				var age = "输入生日有误";
				if (thisYear - bYear > 0)
				{
					if (thisMonth - bMonth < 0) {
						age = thisYear - bYear - 1;
					}else if(thisMonth - bMonth > 0){
						age = thisYear - bYear;
					}else {
						if (thisDay - bDay >= 0) {
							age = thisYear - bYear;
						} else { age = thisYear - bYear - 1; }
					}
				};
				items[0].age = age;
				var metabolize = 166.2;
				if (age<=19) {
					if (items[0].gender=="M"){
						metabolize=166.2;
					}else{
						metabolize=154.0;
					}
				} else if (20<=age<=30) {
					if (items[0].gender=="M"){
						metabolize=157.8;
					}else{
						metabolize=146.5;
					}
				} else if (31<=age<=40) {
					if (items[0].gender=="M"){
						metabolize=158.6;
					}else{
						metabolize=146.9;
					}
				} else if (41<=age<=50) {
					if (items[0].gender=="M"){
						metabolize=154.0;
					}else{
						metabolize=142.4;
					}
				} else if (51<=age) {
					if (items[0].gender=="M"){
						metabolize=149.0;
					}else{
						metabolize=138.6;
					}
				}
				items[0].metabolize=metabolize;
				items[0].sport_energy=item.daily_energy;
				items[0].daily_cost_energy=items[0].surface_area*items[0].metabolize*24*1.1+items[0].sport_energy;
				items[0].qk=items[0].daily_cost_energy;
				
				items[0].station=item.station;
				items[0].havechecked=item.havechecked;
            }
        };
    })
    .factory('Conditions', function(){
    	var items = [
    	{
    		id: 0,
    		name: "过瘦",
    	},
    	{
    		id: 1,
    		name: "健康体重",
    	},
    	{
    		id: 2,
    		name: "有点胖",
    	},
    	{
    		id: 3,
    		name: "肥胖",
    	}
    	];
    	return {
    		get: function (bmi) {
    			if (bmi < 18.5) {
    				return items[0];
    			} else if ( 18.5<=bmi<24){
    				return items[1];
    			} else if ( 24<=bmi<28){
    				return items[2];
    			} else if ( 28<=bmi){
    				return items[3];
    			}
    		}
    	}
    })
    
    
    .factory('University', function () {
        // Might use a resource here that returns a JSON array
        var items = [

        {
            id: 0,
            name: "同济大学",
        },
        {
            id: 1,
            name: "复旦大学",
        },
        {
            id: 2,
            name: "上海交通大学",
        },
        {
            id: 3,
            name: "华东师范大学",
        },
        {
            id: 4,
            name: "上海财经大学",
        },
        {
            id: 5,
            name: "上海外国语大学",
        },
        {
            id: 6,
            name: "上海大学",
        },
        ];

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
    .factory('StaEnergy', function () {
        var stas = [{
            id: 0,
            breakf: '27%',
            lunch: '49%',
            dinner: '24%',
            morningadd: '',
            afternoonadd: '',
            protein: '20%-30%',
            fat: '25%-30%',
            carbohy: '40%-55%'
        },
        {
            id: 1,
            breakf: '20%',
            lunch: '30%',
            dinner: '30%',
            morningadd: '10%',
            afternoonadd: '10%',
            protein: '20%',
            fat: '20%',
            carbohy: '60%'
        },
        {
            id: 2,
            breakf: '30%',
            lunch: '40%',
            dinner: '30%',
            morningadd: '',
            afternoonadd: '',
            protein: '10%-14%',
            fat: '20%-30%',
            carbohy: '55%-65%'
        }];
        return {
            all: function () {
                return stas;
            },
            remove: function (sta) {
                stas.splice(wins.indexOf(sta), 1);
            },
            get: function (staId) {
                for (var i = 0; i < stas.length; i++) {
                    if (stas[i].id === parseInt(staId)) {
                        return stas[i];
                    }
                }
                return null;
            }
        };
    })















;