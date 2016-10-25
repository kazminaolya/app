import angular from "angular";
import $ from 'jquery';
import app from '../app.js';


import model from '../model/model.js'


app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {
      //$http is working in this
   $http.get('./mt_goods.json').success(function(data) {
    $scope.countries = data;
  });



 }]);

//app.controller('mainCtrl', ($scope) =>{
//	$http.get('../model/mt_goods.json').then(
//    function(responce){
//         $scope.data = responce.data;
//    }
//)
//	//тело контроллера 
//	//$scope.test = "hello";

//});
