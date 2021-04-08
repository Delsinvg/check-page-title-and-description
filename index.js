const core = require("@actions/core");
const github = require("@actions/github");

try {
  const siteUrl = core.getInput("site");
  let filledIn = false;

  $.ajax({
    url: siteUrl,
    async: true,
    success: function (data) {
      var matches = data.match(/<title>(.*?)<\/title>/);
      if (matches[0].length > 0) {
        filledIn = true;
        console.log(matches[0]);
      }
    },
  });

  core.setOutput("Title is filled in:", filledIn);
} catch (error) {
  core.setFailed(error.message);
}