const express = require("express");
const router = express.Router();
var request = require('request');

var bodyData = `{
    "update": {},
    "fields": {
      "summary": "Jira api testing",
      
      "issuetype": {
        "id": "10100"
      },
      "components": [],
      
      "project": {
        "id": "15100"
      },
      "description": ""
    }
  }`
router.get("/", (req, res) => {
    var options = {
        method: 'POST',
        url: 'https://jira.data.zc2.ibm.com/rest/api/2/issue',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        },
        body: bodyData
     };
     
     request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send('Response: ' + response.statusCode + ' ' + response.statusMessage);
        console.log(body);
     });
});


module.exports = router;