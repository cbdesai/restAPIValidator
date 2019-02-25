//universalMasterRouter.js
// This is same as https://www.npmjs.com/package/request-validation#full-setup-example's
//user.routes.js

'use strict';
module.exports = function(app) {
  var universalMasterControllerObj = require('../controllers/universalMasterController');
  var partyModelValidateObj = require('../models/partyModel');
  
  app.route('/collection/:collectionName')
    .get(partyModelValidateObj.show, universalMasterControllerObj.read_a_CollectionObject)
    .put(partyModelValidateObj.update, universalMasterControllerObj.update_a_CollectionObject)
    .post(partyModelValidateObj.create,universalMasterControllerObj.create_a_CollectionObject);
};