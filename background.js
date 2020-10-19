console.log("Starting extension");
chrome.browserAction.onClicked.addListener(buttonClicked);
let history = chrome.history.HistoryItem.id
console.log(history);


function buttonClicked() {
	console.log("Pulling history");
}
