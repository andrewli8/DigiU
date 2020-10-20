console.log("Starting extension");

chrome.browserAction.onClicked.addListener(buttonClicked);

chrome.history.search({text: '', maxResults: 100}, function(data) {
    data.forEach(function(page) {
        console.log(page.url);
    });
});

function buttonClicked() {
	console.log("Pulling history");
}
