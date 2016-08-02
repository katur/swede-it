$(document).ready(function() {
  swedeThePage();
});


function swedeThePage() {
  var button = $("#swede-it-button");

  button.on("click", function() {
    chrome.tabs.executeScript({
      file: "jquery.js",
      allFrames: true,
    }, function() {
      chrome.tabs.executeScript({
        file: "swede-it.js",
        allFrames: true,
      });
    });
  });
}
