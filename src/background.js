// Listen and collect each History transition
// Every time a user navigates to a new page let's log this.. or something
chrome.runtime.onInstalled.addListener(onInstalled);
chrome.history.onVisited.addListener((onVisited));


function onInstalled() {
    console.log("onInstalled fired!");
}

function onVisited(history) {
    console.log(history);

    chrome.tabs.sendMessage()
}