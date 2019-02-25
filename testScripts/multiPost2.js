# Not a correct script yet
const axios = require('axios')

  axios.get('http://localhost:3000/collections/Parties', {
    //collectionName: "Parties", partyName: "Party111", partyLastName: "PartyL111"
  })
    .then((res) => {
      console.log(`statusCode: ${res}`)
      //console.log(res)
    })
    .catch((error) => {
      console.error("Erroring Out" + error)
    })
