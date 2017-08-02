
var tictactoe = angular.module('tictactoe', []);

tictactoe.controller('GameCtrl', ['$scope',
  function($scope) {
    game=this;
    game.winner="";
    game.checking="";
    game.gstatus=undefined;

    $scope.b1 = [{
      "name": ".",
      "disabled": false
    }, {
      "name": ".",
      "disabled": false
    }, {
      "name": ".",
      "disabled": false
    }] 
    $scope.b2=[{
      "name": ".",
      "disabled": false
    }, {
      "name": ".",
      "disabled": false
    }, {
      "name": ".",
      "disabled": false
    }]
    $scope.b3=[{
      "name": ".",
      "disabled": false
    }, {
      "name": ".",
      "disabled": false
    }, {
      "name": ".",
      "disabled": false
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
      game.gstatus=true;
    }
    else if(game.winner=="o")
    {
      game.checking="O is the Winner"
      game.gstatus=false;
    }
    else if(count==9&&(game.checking!="x"||game.checking!="o"))
      {
        game.checking="Game is Draw"
        game.gstatus=undefined;
      }  
    console.log(game.checking)
  } 
    
}
  }
  
]);