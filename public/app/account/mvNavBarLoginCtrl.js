angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location ){
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                mvNotifier.notify('Logged In Successfully!');
            }
            else{
                mvNotifier.notify('Username/Password combination incorrect!');
            }
        });
    }

    $scope.signout = function(){
        mvAuth.logoutUser().then(function(){
            $scope.username= "";
            $scope.password= "";
            mvNotifier.notify('You have Successfully Signed Out!');
            $location.path('/');
        })
    }
});