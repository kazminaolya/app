import angular from "angular";
import $ from 'jquery';
import app from '../app.js';
import dima from '../../../mt_goods.json';


import model from '../model/model.js';

console.log(dima);
// var i; 
// $.getJSON('mt_goods.json',function(data) { 
// i =data; 
// }); 
// console.log(i);


app.controller('mainCtrl', ($scope) =>{
	//$http.get('../model/mt_goods.json').then(
   // function(responce){
    //     $scope.data = responce.data;
   // }
//)
	//тело контроллера 
	$scope.test = "hello";

//});



 });

//app.controller('mainCtrl', ($scope) =>{
//	$http.get('../model/mt_goods.json').then(
//    function(responce){
//         $scope.data = responce.data;
//    }
//)
//	//тело контроллера 
//	//$scope.test = "hello";

//});
