import angular from "angular";
import $ from 'jquery';
import app from '../app.js';
import model from '../model/model.js'

app.controller('mainCtrl', ($scope) =>{
	$scope.test = "hello world";
});