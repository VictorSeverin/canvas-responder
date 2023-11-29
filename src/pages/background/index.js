chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-window",
    title: "Respond to this",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-window") {
    chrome.windows.create({
      url: chrome.runtime.getURL("src/pages/popup/index.html") + `?text=${encodeURIComponent(info.selectionText)}`,
      type: "popup",
      width: 320,
      height: 800
    });
  }
});
