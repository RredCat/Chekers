angular.module('starter.controllers', [])

.controller('CheckCtrl', function ($scope, Chats) {
    $scope.tasks = Chats.all();
})
.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.allWithNew();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})
.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
//$scope.items = [];
//$scope.newItem = { name: "", monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false };

//$scope.addItem = function () {
//    var name = $scope.newItem.name;

//    if (typeof name === 'undefined' || '' == name) return;

//    $scope.items.push($scope.newItem);
//    $scope.newItem = { name: "", monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false };

//    //var initWeek = function () {//Make cycle in view. But later..
//    //    return {monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false };
//    //};
//    // Add validation checker!! But later..
//};
//$scope.removeItem = function (index) {
//    $scope.items.splice(index, 1);
//};