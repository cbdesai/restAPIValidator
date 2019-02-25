//universalMasterController.js
// There is reference to the controller in  user.routes.js of https://www.npmjs.com/package/request-validation#full-setup-example
// at line 2 but the controller is not described.
// Assuming the auther expected developer to create his/her own controller.
// The way controller works is -- the router checks for validation through the mode and passes conrtol to controller
// Hence this is the controller whcih is being called from router 

'use strict';

var express = require ('express');
var bodyParser = require ('body-parser');


//-----------------------------------

exports.list_all_CollectionObjects = function (req, res) {
 console.log ("Was in list_all_CollectionObjects");
 //res.json(req.body);
  
 };
//-----------------------------------
exports.create_a_CollectionObject = function (req, res) {
  console.log ("Was in create_a_CollectionObject");
  //res.json(req.body);
};

//-----------------------------------

exports.read_a_CollectionObject = function (req, res) {
 console.log ("Was in read_a_CollectionObject");
 //res.json(req.body);
};

//-----------------------------------

exports.update_a_CollectionObject = function (req, res) {
 console.log ("Was in update_a_CollectionObject");
 //res.json(req.body);
};

//-----------------------------------

exports.delete_a_CollectionObject = function (req, res) {
 console.log ("Was in delete_a_CollectionObject");
 //res.json(req.body);
};
