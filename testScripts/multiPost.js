# Not a correct script yet
const axios = require('axios');
var express = require ('express');
var bodyParser = require ('body-parser');
var partyName = "PartyName" ;
var partyLastName = "PartyLastName" ;

for (i = 301; i < 310; i++) {
  var vPartyName =  "PartyName " + i;
  var vPartyLastName =  "PartyLastName " + i;
console.log ('\n' + vPartyName + " " + vPartyLastName )
  axios.post('http://localhost:3000/collection/Parties', {
     partyName: vPartyName, partyLastName: vPartyLastName
  })
    .then((res) => {
      console.log("statusCode: " + res.json)
      //console.log(res)
    })
    .catch((error) => {
      console.error("error is :" +  error)
    })

}