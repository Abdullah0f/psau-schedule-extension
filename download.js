chrome.runtime.onMessage.addListener(function (request) {
  var blob = new Blob([request.result], {
    type: "text/csmo;charset=utf-8",
  });
  var url = URL.createObjectURL(blob);

  chrome.downloads.download({
    url: url,
    filename: "schedule.csmo",
  });
});
