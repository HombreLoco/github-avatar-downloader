var request = require("request");
var fs = require("fs");

console.log("Welcome to the GitHub Avatar Downloader!");


var GITHUB_USER = "HombreLoco";
var GITHUB_TOKEN = "9dce65ff12e3df64c728a9b476037e0aa081e90b";

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      "User-Agent": "HombreLoco"
    }
  };

  request(options, function(err, response, body) {
    if (err) {
      console.log("Error!!!");
    }
    var bodyObject = (JSON.parse(body));
    cb(err, bodyObject);
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url)
  .on("error", function (err) {
          throw err;
  })
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jQuery", "jQuery", function(err, result) {
  var avatars = [];
  for (var i in result) {
    downloadImageByURL(result[i].avatar_url, `./avatars/${result[i].login}.jpg`)
  }
});