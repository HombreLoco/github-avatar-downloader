var request = require("request");

console.log("Welcome to the GitHub Avatar Downloader!");


var GITHUB_USER = "HombreLoco";
var GITHUB_TOKEN = "9dce65ff12e3df64c728a9b476037e0aa081e90b";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`
  console.log(requestURL);
}


getRepoContributors("jQuery", "jQuery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});