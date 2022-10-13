chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["main.js"],
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.result);
  chrome.tabs.create(
    {
      url: "download.html",
    },
    function (tab) {
      // This executes only after your content script executes
      const myTimeout = setTimeout(function () {
        chrome.tabs.sendMessage(tab.id, { result: request.result });
      }, 1500);
    }
  );
});
