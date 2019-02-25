//partyModel.js
// This is same as https://www.npmjs.com/package/request-validation#full-setup-example's
//user.validation.js

const Joi = require('joi-add')();
const { ValidationSchema, RequestValidation } = require('request-validation');


var partySchema = new ValidationSchema({

  body: {
      partyID: Joi.string().addLabel('partyID'),
      partyName:Joi.string().min(2).addLabel('partyName'),
      partyLastName: Joi.string().min(2).addLabel('partyLastName'),
      partyEmail: Joi.string().email().addLabel('email')
      },
  params: {
      collectionName: Joi.string() 
    }
});

module.exports = new RequestValidation ({
      create: partySchema.use({
        body: ['partyID', 'partyName','partyLastName', 'email'],
        params: 'collectionName'
      }),
      show: partySchema.use({
        body: ['partyID'],
        params: 'collectionName'
      }),
      update: partySchema.use({
        body: ['partyID', 'partyName','partyLastName', 'email'],
        params: 'collectionName'
      })
});
