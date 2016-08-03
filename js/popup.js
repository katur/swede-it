$(document).ready(function() {
  swedeThePage();
});


function swedeThePage() {
  var button = $("#swede-it-button");
  button.on("click", function() {
    chrome.tabs.executeScript({
      file: "js/jquery.js",
      allFrames: true,
    }, function() {
      chrome.tabs.executeScript({
        file: "js/swede-it.js",
        allFrames: true,
      });
    });
  });
}
