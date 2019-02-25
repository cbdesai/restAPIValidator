# This script was modified to work with restvalidtor

curl -i -X POST -H 'Content-Type: application/json' -d '{"partyID":"X2345", "partyName": "Party111", "partyLastName": "PartyL111", "partyEmail": "party@company.com"}' http://localhost:3000/collection/Parties
