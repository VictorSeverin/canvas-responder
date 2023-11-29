chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openWindowWithText") {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        chrome.runtime.sendMessage({
            action: "createWindow",
            text: message.text,
            screenWidth: screenWidth,
            screenHeight: screenHeight
        });
    }
});
