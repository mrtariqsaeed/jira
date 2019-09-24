var request = require('request').defaults({strictSSL: false});
var tickets = require('./data/Tickets');
var Links = require('./data/Links');


var username = "tarek.saeed1@ibm.com";
var password = "Tariqsaeed,261191";
var auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");

function firstStory()
{
  var story = `{
    "update": {},
    
    "fields": {
        "summary": "Initiate Data Onboarding Process for TAREK Application",
        
        "issuetype": {
          "id": "10001"
        },
        "components": [{"name": "Initiate Data Onboarding Process"}],
        
        "project": {
          "id": "15100"
        },
        "description": "Work with Requester(Project team) for Data assets to be onboarded to CEDP"
      }
  }`;
  
  var options = {
    method: 'POST',
    url: 'https://jira.data.zc2.ibm.com/rest/api/2/issue',
    headers: {
      'Authorization': auth,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: story
  }
      
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    var obj = JSON.parse(body);
    var latestID = parseInt(obj.id);
    console.log(latestID);
    addAllIssues(latestID);
  });
  
}


function addAllIssues(id)
{
  var bodyData = tickets;


  var options2 = {
    method: 'POST',
    url: 'https://jira.data.zc2.ibm.com/rest/api/2/issue/bulk',
    headers: {
      'Authorization': auth,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: bodyData
  }
      
  request(options2, function (error, response, body) 
  {
    if (error) throw new Error(error);
    console.log('Response: ' + response.statusCode + ' ' + response.statusMessage);
    console.log(body);
    createIssueLinks(id);
  });

}
function createIssueLinks(id)
{
  var links = Links.allLinks(id);

  links.forEach(link => {
    var options3 = {
      method: 'POST',
      url: 'https://jira.data.zc2.ibm.com/rest/api/2/issueLink',
      headers: {
        'Authorization': auth,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: link
    }
        
    request(options3, function (error, response, body) {
      if (error) throw new Error(error);
      console.log('Response: ' + response.statusCode + ' ' + response.statusMessage);
      console.log(body);
    });
  });
}

module.exports.startCreation = firstStory()