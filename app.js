
var tictactoe = angular.module('tictactoe', []);

tictactoe.controller('GameCtrl', ['$scope',
  function($scope) {
    game=this;
    game.winner="";
    game.checking="";

    $scope.b1 = [{
      "name": ".",
      "disabled": false,
      "id": "1"
    }, {
      "name": ".",
      "disabled": false,
      "id": "2"
    }, {
      "name": ".",
      "disabled": false,
      "id": "3"
    }] 
    $scope.b2=[{
      "name": ".",
      "disabled": false,
      "id": "4"
    }, {
      "name": ".",
      "disabled": false,
      "id": "5"
    }, {
      "name": ".",
      "disabled": false,
      "id": "6"
    }]
    $scope.b3=[{
      "name": ".",
      "disabled": false,
      "id": "7"
    }, {
      "name": ".",
      "disabled": false,
      "id": "8"
    }, {
      "name": ".",
      "disabled": false,
      "id": "9"
    }]

var count=0;
var status=true;
$scope.gameGen=function(b){
  game.arr=[];
  status=!status;
   if(status&&count<9)
   { 
    count++;
    b.name="x";
   } 
   else if(!status&&count<9)
   {
    count++;
    b.name="o";
   }  
 if(($scope.b1[0].name==$scope.b1[1].name&&$scope.b1[0].name==$scope.b1[2].name&&$scope.b1[0].name!=".")||($scope.b3[0].name==$scope.b3[1].name&&$scope.b3[1].name==$scope.b3[2].name&&$scope.b3[0].name!=".")||($scope.b2[0].name==$scope.b2[1].name&&$scope.b2[1].name==$scope.b2[2].name&&$scope.b2[0].name!="."))
   game.winner=b.name;
  else if(($scope.b1[0].name==$scope.b2[0].name&&$scope.b1[0].name==$scope.b3[0].name&&$scope.b1[0].name!=".")||($scope.b1[1].name==$scope.b2[1].name&&$scope.b1[1].name==$scope.b3[1].name&&$scope.b1[1].name!=".")||($scope.b1[2].name==$scope.b2[2].name&&$scope.b1[2].name==$scope.b3[2].name&&$scope.b1[2].name!="."))
  game.winner=b.name;
 else if(($scope.b1[0].name==$scope.b2[1].name&&$scope.b1[0].name==$scope.b3[2].name&&$scope.b1[0].name!=".")||($scope.b1[2].name==$scope.b2[1].name&&$scope.b1[2].name==$scope.b3[0].name&&$scope.b1[2].name!="."))
  game.winner=b.name; 
  b.disabled=true;
    $scope.check = function(){
    console.log(game.winner);
      if(game.winner=="x")
   {
      game.checking="X is the Winner"
    }
    else if(game.winner=="o")
    {
      game.checking="O is the Winner"
    }
    else if(count==9&&(game.checking!="x"||game.checking!="o"))
      game.checking="Game is Draw"
    console.log(game.checking)
  } 
    
}
  }
  
]);