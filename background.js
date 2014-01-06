function toggleFile() {
    chrome.tabs.getSelected(null, function (tab) {
        var url = tab.url;
        var newUrl;
        if (url.substr(-2) == '.m') {
            newUrl = url.replace('.m', '.h');
        } else if (url.substr(-2) == '.h') {
            newUrl = url.replace('.h', '.m');
        } else {
        	return;
        }
        chrome.tabs.update(tab.id, {
            url: newUrl
        });
    });
}

chrome.commands.onCommand.addListener(function (command) {
    toggleFile();
});