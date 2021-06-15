window.onbeforeunload = function (e) {
    localStorage.clear();
};
var url = window.location.hostname;
if (url.includes('meet')) {
    if (document.getElementsByClassName('uGOf1d').length > 0) {
        var meet = true;
    } else {
        var meet = false;
    }
}
if (document.getElementsByClassName('uGOf1d').length > 0) {
    chrome.runtime.sendMessage({
        meet: meet,
        noOfParticipants: document.querySelector('.uGOf1d').innerHTML,
        running: localStorage.getItem('running')
    });

} else {
    chrome.runtime.sendMessage({
        meet: meet
    });
}